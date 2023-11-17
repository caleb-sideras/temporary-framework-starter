package gox

import (
	"bufio"
	"bytes"
	"context"
	"errors"
	"fmt"
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/gox/utils"
	"github.com/gorilla/mux"
	"go/ast"
	"go/parser"
	"go/token"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"reflect"
	"strings"
)

const (
	NormalRequest RequestType = iota
	HxGet_Index
	HxGet_Page
	HxBoost_Page
	HxBoost_Index
	ErrorRequest
)

const (
	DefaultHandler HandleType = iota // no params
	ResReqHandler                    // Response and Request
)

const (
	DIR      = "/"
	GO_EXT   = ".go"
	HTML_EXT = ".html"
	TXT_EXT  = ".txt"

	EXPORTED_HANDLE      = "Handle"
	EXPORTED_RENDER      = "Render"
	EXPORTED_INDEX       = "Index"
	EXPORTED_PAGE        = "Page"
	EXPORTED_PAGE_STATIC = "Page_"
	EXPORTED_DATA        = "Data"

	PAGE  = "page"
	INDEX = "index"
	ROUTE = "route"
	ETAG  = "etag_file"
	BODY  = "-body"

	PAGE_BODY          = PAGE + BODY
	PAGE_FILE          = PAGE + GO_EXT
	INDEX_FILE         = INDEX + GO_EXT
	ROUTE_FILE         = ROUTE + GO_EXT
	PAGE_OUT_FILE      = PAGE + HTML_EXT
	PAGE_BODY_OUT_FILE = PAGE_BODY + HTML_EXT
	ROUTE_OUT_FILE     = ROUTE + HTML_EXT
	ETAG_FILE          = ETAG + TXT_EXT
)

var FILE_CHECK_LIST = map[string]bool{
	INDEX_FILE: true,
	PAGE_FILE:  true,
	ROUTE_FILE: true,
}

var FILE_GO_CHECK_LIST = map[string]bool{
	INDEX_FILE: true,
	PAGE_FILE:  true,
	ROUTE_FILE: true,
}

func NewGox(outputDir string) *Gox {
	return &Gox{
		OutputDir: outputDir,
	}
}

func (g *Gox) Build(startDir string, packageDir string) {

	fmt.Println("--------------------------WALKING DIRECTORY--------------------------")
	dirFiles, err := walkDirectoryStructure(startDir)
	if err != nil {
		log.Fatalf("error walking the path %v: %v", startDir, err)
	}
	printDirectoryStructure(dirFiles)

	fmt.Println("-------------------------EXTRACTING YOUR CODE-------------------------")
	imports, indexGroup, pageRenderFunctions, pageHandleFunctions, routeRenderFunctions, routeHandleFunctions := getSortedFunctions(dirFiles, packageDir)

	fmt.Println("-----------------------RENDERING SORTED FUNCTIONS----------------------")
	code, err := renderSortedFunctions(imports, indexGroup, pageRenderFunctions, pageHandleFunctions, routeRenderFunctions, routeHandleFunctions)
	if err != nil {
		panic(err)
	}
	fmt.Println(code)

	fmt.Println("------------------------RENDERING STATIC FILES-------------------------")
	err = g.renderStaticFiles()
	if err != nil {
		panic(err)
	}
}

func (g *Gox) Run(r *mux.Router, port string, servePath string) {

	http.Handle("/", r)
	// http.Handle(servePath, http.StripPrefix(servePath, http.FileServer(http.Dir(g.OutputDir))))
	g.handleRoutes(r, g.getETags())
	log.Fatal(http.ListenAndServe(port, nil))
}

func (g *Gox) getETags() map[string]string {
	log.Println("GENERATING ETAGS...")
	var eTags map[string]string
	eTags = make(map[string]string)

	file, err := os.Open(filepath.Join(g.OutputDir, ETAG_FILE))
	if err != nil {
		log.Fatalf("could not create file: %v", err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		parts := strings.Split(scanner.Text(), ":")
		if len(parts) == 2 {
			eTags[parts[0]] = parts[1]
		}
	}
	return eTags
}

// handleRoutes() binds Mux handlers to user defined functions, and creates default handlers to serve static pages
func (g *Gox) handleRoutes(r *mux.Router, eTags map[string]string) {
	log.Println("---------------------Page - Render-----------------------")
	for _, route := range PageRenderList {
		// loop variable capture
		currRoute := route.Path
		log.Println(currRoute)

		r.HandleFunc(currRoute+"{slash:/?}",
			func(w http.ResponseWriter, r *http.Request) {
				log.Println("- - - - - - - - - - - -")

				eStr := ""
				pStr := ""
				eTagPath := &eStr
				pagePath := &pStr

				handlePage := func() {
					log.Println("Partial")
					*eTagPath = filepath.Join(r.URL.Path, PAGE_BODY_OUT_FILE)
					*pagePath = filepath.Join(g.OutputDir, *eTagPath)
				}

				handleBPage := func() {
					handlePage()
					w.Header().Set("HX-Retarget", "main")
					w.Header().Set("HX-Reswap", "innerHTML transition:true")
				}

				handleIndex := func() {
					log.Println("Full-Page")
					*eTagPath = filepath.Join(r.URL.Path, PAGE_OUT_FILE)
					*pagePath = filepath.Join(g.OutputDir, *eTagPath)
				}

				formatRequest(w, r, handlePage, handleBPage, handleIndex, handleIndex)

				log.Println("Path:", *pagePath)
				log.Println("ETag:", eTags[*eTagPath])

				if eTag := r.Header.Get("If-None-Match"); eTag == eTags[*eTagPath] {
					log.Println("403: status not modified")
					w.WriteHeader(http.StatusNotModified)
					return
				}

				w.Header().Set("Vary", "HX-Request")
				w.Header().Set("Cache-Control", "no-cache")
				w.Header().Set("ETag", eTags[*eTagPath])

				http.ServeFile(w, r, *pagePath)
			},
		)
	}

	log.Println("---------------------Page - Handle-----------------------")
	for _, route := range PageHandleList {
		// loop variable capture
		currRoute := route.Path
		log.Println(currRoute)

		switch route.HandleType {
		case DefaultHandler:
			currHandler := route.Handler.(func() templ.Component)
			r.HandleFunc(currRoute+"{slash:/?}",
				func(w http.ResponseWriter, r *http.Request) {
					log.Println("- - - - - - - - - - - -")

					var buffer bytes.Buffer
					// write to a buffer, calculate etag, if its the same then 304

					handlePage := func() {
						log.Println("Partial")
						err := currHandler().Render(r.Context(), &buffer)
						if err != nil {
							log.Printf("500: Issue creating Page() at %s", currRoute)
							w.WriteHeader(http.StatusInternalServerError)
							return
						}
					}

					handleBoostPage := func() {
						handlePage()
						w.Header().Set("HX-Retarget", "main")
						w.Header().Set("HX-Reswap", "innerHTML transition:true")
					}

					handleIndex := func() {
						log.Println("Full-Page")
						err := IndexList[currRoute]().Render(templ.WithChildren(r.Context(), currHandler()), &buffer)
						if err != nil {
							log.Printf("500: Issue creating Index() at %s", currRoute)
							w.WriteHeader(http.StatusInternalServerError)
							return
						}
					}

					formatRequest(w, r, handlePage, handleBoostPage, handleIndex, handleIndex)

					eTag := utils.GenerateETag(buffer.String())

					if rEtag := r.Header.Get("If-None-Match"); rEtag == eTag {
						log.Println("304: status not modified")
						w.WriteHeader(http.StatusNotModified)
						return
					}

					w.Header().Set("Vary", "HX-Request")
					w.Header().Set("Cache-Control", "no-cache")
					w.Header().Set("ETag", eTag)
					w.Write(buffer.Bytes())
				},
			)
		case ResReqHandler:
			currHandler := route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)
			r.HandleFunc(currRoute+"{slash:/?}",
				func(w http.ResponseWriter, r *http.Request) {
					log.Println("- - - - - - - - - - - -")

					var buffer bytes.Buffer

					handlePage := func() {
						log.Println("Partial")
						err := currHandler(w, r).Render(r.Context(), &buffer)
						if err != nil {
							log.Printf("500: Issue creating Page() at %s", currRoute)
							w.WriteHeader(http.StatusInternalServerError)
							return
						}
					}

					handleBoostPage := func() {
						handlePage()
						w.Header().Set("HX-Retarget", "main")
						w.Header().Set("HX-Reswap", "innerHTML transition:true")
					}

					handleIndex := func() {
						log.Println("Full-Page")
						err := IndexList[currRoute]().Render(templ.WithChildren(r.Context(), currHandler(w, r)), &buffer)
						if err != nil {
							log.Printf("500: Issue creating Index() at %s", currRoute)
							w.WriteHeader(http.StatusInternalServerError)
							return
						}
					}

					formatRequest(w, r, handlePage, handleBoostPage, handleIndex, handleIndex)

					// Note for all ETAGs - Since this is re-rendering per request, even if page content &/or skeleton is static, @Suspense will generate a new UUID per request, creating a unique ETAG everytime

					// eTag := utils.GenerateETag(buffer.String())

					// if rEtag := r.Header.Get("If-None-Match"); rEtag == eTag {
					// 	log.Println("304: status not modified")
					// 	w.WriteHeader(http.StatusNotModified)
					// 	return
					// }

					w.Header().Set("Vary", "HX-Request")
					w.Header().Set("Cache-Control", "no-cache")
					// w.Header().Set("ETag", eTag)
					w.Write(buffer.Bytes())
				},
			)
		}
	}

	log.Println("---------------------Route - Handle-----------------------")
	for _, route := range RouteHandleList {
		currRoute := route.Path
		log.Println(currRoute)

		switch route.HandleType {
		case DefaultHandler:
			currHandler := route.Handler.(func() templ.Component)
			r.HandleFunc(currRoute+"{slash:/?}",
				func(w http.ResponseWriter, r *http.Request) {
					log.Println("- - - - - - - - - - - -")

					var buffer bytes.Buffer

					err := currHandler().Render(r.Context(), &buffer)
					if err != nil {
						log.Printf("500: Issue creating Page() at %s", currRoute)
						w.WriteHeader(http.StatusInternalServerError)
						return
					}

					// eTag := utils.GenerateETag(buffer.String())

					// if rEtag := r.Header.Get("If-None-Match"); rEtag == eTag {
					// 	log.Println("304: status not modified")
					// 	w.WriteHeader(http.StatusNotModified)
					// 	return
					// }

					w.Header().Set("Vary", "HX-Request")
					w.Header().Set("Cache-Control", "no-cache")
					// w.Header().Set("ETag", eTag)
					w.Write(buffer.Bytes())
				},
			)
		case ResReqHandler:
			currHandler := route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)
			r.HandleFunc(currRoute+"{slash:/?}",
				func(w http.ResponseWriter, r *http.Request) {
					log.Println("- - - - - - - - - - - -")

					var buffer bytes.Buffer

					err := currHandler(w, r).Render(r.Context(), &buffer)
					if err != nil {
						log.Printf("500: Issue creating Page() at %s", currRoute)
						w.WriteHeader(http.StatusInternalServerError)
						return
					}

					// eTag := utils.GenerateETag(buffer.String())

					// if rEtag := r.Header.Get("If-None-Match"); rEtag == eTag {
					// log.Println("304: status not modified")
					// w.WriteHeader(http.StatusNotModified)
					// return
					// }

					w.Header().Set("Vary", "HX-Request")
					w.Header().Set("Cache-Control", "no-cache")
					// w.Header().Set("ETag", eTag)
					w.Write(buffer.Bytes())
				},
			)
		}
	}

	log.Println("---------------------Route - Render-----------------------")
	for _, route := range RouteRenderList {
		currRoute := route.Path
		log.Println(currRoute)

		r.HandleFunc(currRoute+"{slash:/?}",
			func(w http.ResponseWriter, r *http.Request) {
				log.Println("- - - - - - - - - - - -")

				eTagPath := filepath.Join(r.URL.Path, ROUTE_OUT_FILE)
				pagePath := filepath.Join(g.OutputDir, eTagPath)

				if eTag := r.Header.Get("If-None-Match"); eTag == eTags[eTagPath] {
					log.Println("403: status not modified")
					w.WriteHeader(http.StatusNotModified)
					return
				}

				log.Println("Serving File:", pagePath)

				w.Header().Set("Vary", "HX-Request")
				w.Header().Set("Cache-Control", "no-cache")
				w.Header().Set("ETag", eTags[eTagPath])

				http.ServeFile(w, r, pagePath)
			},
		)
	}
	log.Println("----------------------CUSTOM HANDLERS----------------------")
	// for _, route := range HandleList {
	// 	// loop variable capture
	// 	currRoute := route
	// 	log.Println(currRoute.Path + DIR)
	// 	r.HandleFunc(currRoute.Path+"{slash:/?}", currRoute.Handler)
	// }
}

func formatRequest(w http.ResponseWriter, r *http.Request, ifPage func(), ifBPage func(), ifIndex func(), ifBIndex func()) {
	requestType := determineRequest(w, r)
	switch requestType {
	case ErrorRequest:
		// handle Error
	case HxGet_Page:
		ifPage()
	case HxBoost_Page:
		ifBPage()
	case HxGet_Index:
		ifIndex()
	case HxBoost_Index, NormalRequest:
		ifBIndex()
	}
}

func determineRequest(w http.ResponseWriter, r *http.Request) RequestType {

	if !utils.IsHtmxRequest(r) {
		return NormalRequest
	}

	log.Println("HX-Request")

	// if not hx-boosted we assume that its a hx-get
	if !utils.IsHxBoosted(r) {
		// allow the user to chose between page+index or page
		if r.URL.Query().Get("index") == "true" {
			return HxGet_Index
		}
		return HxGet_Page
	}

	htmxUrl, err := utils.LastElementOfURL(utils.GetHtmxRequestURL(r))
	if err != nil {
		return ErrorRequest
	}

	// serve page+index if page doesn't have an index group
	if _, ok := IndexList[htmxUrl]; !ok {
		return HxBoost_Index
	}

	if reflect.ValueOf(IndexList[htmxUrl]).Pointer() == reflect.ValueOf(IndexList[r.URL.Path]).Pointer() {
		return HxBoost_Page
	}

	// serve page+index if not matching index group
	return HxBoost_Index
}

// RenderStaticFiles() renders all static files defined by the user
func (g *Gox) renderStaticFiles() error {

	output := ""

	for _, render := range PageRenderList {

		// page.html
		fp, err := utils.CreateFile(filepath.Join(render.Path, PAGE_OUT_FILE), g.OutputDir)
		if err != nil {
			return err
		}

		if _, ok := IndexList[render.Path]; !ok {
			return errors.New(fmt.Sprintf("Could not find an index for path: %s", render.Path))
		}

		err = IndexList[render.Path]().Render(templ.WithChildren(context.Background(), render.Handler()), fp)
		if err != nil {
			return err
		}

		pathAndTagPage, err := readFileAndGenerateETag(g.OutputDir, filepath.Join(render.Path, PAGE_OUT_FILE))
		if err != nil {
			return err
		}
		output += pathAndTagPage

		// page-body.html
		f, err := utils.CreateFile(filepath.Join(render.Path, PAGE_BODY_OUT_FILE), g.OutputDir)
		if err != nil {
			return err
		}

		err = render.Handler().Render(context.Background(), f)
		if err != nil {
			return err
		}

		pathAndTagBody, err := readFileAndGenerateETag(g.OutputDir, filepath.Join(render.Path, PAGE_BODY_OUT_FILE))
		if err != nil {
			return err
		}
		output += pathAndTagBody

	}

	for _, render := range RouteRenderList {

		// page.html
		f, err := utils.CreateFile(filepath.Join(render.Path, ROUTE_OUT_FILE), g.OutputDir)
		if err != nil {
			return err
		}

		err = render.Handler().Render(context.Background(), f)
		if err != nil {
			return err
		}

		pathAndTagBody, err := readFileAndGenerateETag(g.OutputDir, filepath.Join(render.Path, ROUTE_OUT_FILE))
		if err != nil {
			return err
		}
		output += pathAndTagBody

	}

	file, err := utils.CreateFile(ETAG_FILE, g.OutputDir)
	defer file.Close()
	if err != nil {
		return err
	}

	_, err = file.Write([]byte(output))
	if err != nil {
		return err
	}

	return nil
}

func readFileAndGenerateETag(outDir string, filePath string) (string, error) {

	content, err := os.ReadFile(filepath.Join(outDir, filePath))
	if err != nil {
		return "", err
	}
	output := fmt.Sprintf("%s:%s\n", filePath, utils.GenerateETag(string(content)))
	return output, nil

}

func printDirectoryStructure(dirFiles map[string]map[string][]GoxDir) {
	for k, v := range dirFiles {
		fmt.Println("Directory:", k)
		for ext, files := range v {
			fmt.Println("  ", ext)
			for _, file := range files {
				fmt.Println("   -", file)
			}
		}
	}
}

func walkDirectoryStructure(startDir string) (map[string]map[string][]GoxDir, error) {

	result := make(map[string]map[string][]GoxDir)

	err := filepath.Walk(startDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if info.IsDir() && strings.HasPrefix(info.Name(), "_") {
			return filepath.SkipDir
		}

		if info.IsDir() && path != startDir {
			files := make(map[string][]GoxDir)

			filepath.Walk(path, func(innerPath string, innerInfo os.FileInfo, innerErr error) error {

				if innerInfo.IsDir() && strings.HasPrefix(innerInfo.Name(), "_") {
					return filepath.SkipDir
				}

				ext := filepath.Ext(innerPath)
				if !innerInfo.IsDir() && filepath.Dir(innerPath) == path && FILE_CHECK_LIST[filepath.Base(innerPath)] && filepath.Base(innerPath) != INDEX_FILE {
					if _, exists := files[ext]; !exists {
						files[ext] = []GoxDir{}
					}
					files[ext] = append(files[ext], GoxDir{filepath.Base(innerPath), innerPath})
				}
				return nil
			})

			currDir := path
			for {
				indexFile := filepath.Join(currDir, INDEX_FILE)
				if _, err := os.Stat(indexFile); !os.IsNotExist(err) {
					if _, ok := files[filepath.Ext(indexFile)]; !ok {
						files[filepath.Ext(indexFile)] = []GoxDir{}
					}
					files[filepath.Ext(indexFile)] = append(files[filepath.Ext(indexFile)], GoxDir{filepath.Base(indexFile), indexFile})
					break
				}
				currDir = filepath.Dir(currDir)
				if currDir == "." || currDir == "/" {
					return errors.New("MISSING: " + INDEX_FILE)
				}
			}

			result[path] = files
		}
		return nil
	})

	return result, err
}
func getSortedFunctions(dirFiles map[string]map[string][]GoxDir, packageDir string) (utils.StringSet, []string, []string, []string, []string, []string) {

	var indexGroup map[string]string = make(map[string]string)
	var routeRenderFunctions []string
	var routeHandleFunctions []string
	var pageRenderFunctions []string
	var pageHandleFunctions []string
	imports := utils.NewStringSet()

	for dir, files := range dirFiles {
		if len(files) <= 0 {
			continue
		}

		fmt.Println("Directory:", dir)

		var goFiles []GoxDir
		if _, ok := files[GO_EXT]; ok {
			goFiles = files[GO_EXT]
		}

		ndir := removeDirWithUnderscorePostfix(dir)
		leafPath := ndir[3:]
		if leafPath == "" {
			leafPath = "/"
		}

		// prevent unnecessary import
		needImport := false
		for _, gd := range goFiles {
			switch gd.FileType {
			case INDEX_FILE:
				fmt.Println("   index.go")

				expFns, pkName, err := getExportedFuctions(gd.FilePath)
				if err != nil {
					panic(err)
				}

				if pkName == "" {
					fmt.Println("   - No defined package name in", gd.FilePath)
					break
				}

				if expFns == nil {
					fmt.Println("   - No exported functions in", gd.FilePath)
					break
				}

				for expFn, expT := range expFns {
					if expFn == EXPORTED_INDEX {
						if expT.Rtn != "templ.Component" {
							fmt.Printf("   - No Return Type -> func %s\n", expFn)
							continue
						}
						if expT.Recv != "" {
							fmt.Printf("   - Receiver Type Unsupported-> func %s\n", expFn)
							continue
						}

						imports.Add(`"` + packageDir + filepath.Dir(gd.FilePath) + `"`)
						indexGroup[leafPath] = formatIndexFunction(pkName, expFn)
						fmt.Printf("   - Extracted -> func %s (%s)\n", expFn, gd.FilePath)
					}
				}

			case PAGE_FILE:
				fmt.Println("   page.go")

				expFns, pkName, err := getExportedFuctions(gd.FilePath)
				if err != nil {
					panic(err)
				}

				if pkName == "" {
					fmt.Println("   - No defined package name in", gd.FilePath)
					break
				}

				if expFns == nil {
					fmt.Println("   - No exported functions in", gd.FilePath)
					break
				}

				for expFn, expT := range expFns {
					switch expFn {
					case EXPORTED_PAGE_STATIC:
						if expT.Rtn != "templ.Component" {
							fmt.Printf("   - No Return Type -> func %s\n", expFn)
							continue
						}
						if expT.Recv != "" {
							fmt.Printf("   - Receiver Type Unsupported -> func %s\n", expFn)
							continue
						}
						if expT.Params != nil {
							fmt.Printf("   - Parameters in pre-rendered functions Unsupported -> func %s\n", expFn)
							continue
						}
						formatFn := formatRootFunction(pkName, expFn, leafPath)
						pageRenderFunctions = append(pageRenderFunctions, formatFn)
						needImport = true
						fmt.Printf("   - Extracted -> func %s\n", expFn)

					case EXPORTED_PAGE:
						if expT.Rtn != "templ.Component" {
							fmt.Printf("   - No Return Type -> func %s\n", expFn)
							continue
						}
						if expT.Recv != "" {
							fmt.Printf("   - Receiver Type Unsupported-> func %s\n", expFn)
							continue
						}
						var formatFn string
						if expT.Params == nil || len(expT.Params) == 0 {
							formatFn = formatRootHandlerFunction(pkName, expFn, leafPath, "DefaultHandler")
						} else if len(expT.Params) == 2 && expT.Params[0] == "http.ResponseWriter" && expT.Params[1] == "http.Request" {
							formatFn = formatRootHandlerFunction(pkName, expFn, leafPath, "ResReqHandler")
						} else {
							fmt.Printf("   - Params Unsupported-> func %s\n", expFn)
							continue
						}

						pageHandleFunctions = append(pageHandleFunctions, formatFn)
						needImport = true
						fmt.Printf("   - Extracted -> func %s\n", expFn)
					}
				}

			case ROUTE_FILE:

				fmt.Println("   route.go")

				expFns, pkName, err := getExportedFuctions(gd.FilePath)
				if err != nil {
					panic(err)
				}

				if pkName == "" {
					fmt.Println("No defined package name in", gd.FilePath)
					break
				}

				if expFns == nil {
					fmt.Println("   - No exported functions in", gd.FilePath)
					break
				}

				for expFn, expT := range expFns {
					if strings.HasSuffix(expFn, "_") {
						if expT.Rtn != "templ.Component" {
							fmt.Printf("   - No Return Type -> func %s\n", expFn)
							continue
						}
						if expT.Recv != "" {
							fmt.Printf("   - Unsupported Receiver Type -> func %s\n", expFn)
							continue
						}
						if expT.Params != nil {
							fmt.Printf("   - Parameters in Static Functions Unsupported -> func %s\n", expFn)
							continue
						}
						formatFn := formatDefaultFunction(pkName, expFn, strings.TrimSuffix(expFn, "_"), leafPath)
						routeRenderFunctions = append(routeRenderFunctions, formatFn)
						needImport = true
						fmt.Printf("   - Extracted -> func %s\n", expFn)
					} else {
						if expT.Rtn != "templ.Component" {
							fmt.Printf("   - No Return Type -> func %s\n", expFn)
							continue
						}
						if expT.Recv != "" {
							fmt.Printf("   - Receiver Type Unsupported-> func %s\n", expFn)
							continue
						}
						var formatFn string
						if expT.Params == nil || len(expT.Params) == 0 {
							formatFn = formatHandlerFunction(pkName, expFn, leafPath, expFn, "DefaultHandler")
						} else if len(expT.Params) == 2 && expT.Params[0] == "http.ResponseWriter" && expT.Params[1] == "http.Request" {
							formatFn = formatHandlerFunction(pkName, expFn, leafPath, expFn, "ResReqHandler")
						} else {
							fmt.Printf("   - Params Unsupported-> func %s\n", expFn)
							continue
						}

						routeHandleFunctions = append(routeHandleFunctions, formatFn)
						needImport = true
						fmt.Printf("   - Extracted -> func %s\n", expFn)
					}
				}
			}
		}

		if needImport {
			imports.Add(`"` + packageDir + dir + `"`)
		}
	}
	var indexGroupFinal []string
	for path, index := range indexGroup {
		indexGroupFinal = append(indexGroupFinal, fmt.Sprintf(`"%s" : %s,`, path, index))
	}

	return imports, indexGroupFinal, pageRenderFunctions, pageHandleFunctions, routeRenderFunctions, routeHandleFunctions
}

func formatDefaultFunction(pkName string, fnName string, pathName string, leafPath string) string {
	if leafPath == "/" {
		leafPath = ""
	}
	return `{"` + leafPath + `/` + strings.ToLower(pathName) + `", ` + pkName + `.` + fnName + `},`
}

func formatRootFunction(pkName string, fnName string, leafPath string) string {
	return `{"` + leafPath + `", ` + pkName + `.` + fnName + `},`
}

func formatRootHandlerFunction(pkName string, fnName string, leafPath string, fnType string) string {
	return `{"` + leafPath + `", ` + pkName + `.` + fnName + `, ` + fnType + `},`
}

func formatHandlerFunction(pkName string, fnName string, leafPath string, pathName string, fnType string) string {
	if leafPath == "/" {
		leafPath = ""
	}
	return `{"` + leafPath + `/` + strings.ToLower(pathName) + `", ` + pkName + `.` + fnName + `, ` + fnType + `},`
}

func formatIndexFunction(pkName string, fnName string) string {
	return fmt.Sprintf("%s.%s", pkName, fnName)
}

func formatCustomFunction(pkName string, fnName string) string {
	return `{` + pkName + `.` + fnName + `},`
}

func getAstVals(path string) (*ast.File, error) {
	_, err := ioutil.ReadFile(path)
	if err != nil {
		return nil, err
	}

	fset := token.NewFileSet()
	node, err := parser.ParseFile(fset, path, nil, 0)
	if err != nil {
		return nil, err
	}
	return node, nil
}

func isHTTPResponseWriter(expr ast.Expr) bool {
	selector, ok := expr.(*ast.SelectorExpr)
	if !ok {
		return false
	}

	x, ok := selector.X.(*ast.Ident)
	if !ok {
		return false
	}

	// Check if the type is "http" package and "ResponseWriter" identifier
	return x.Name == "http" && selector.Sel.Name == "ResponseWriter"
}

func isHTTPRequest(expr ast.Expr) bool {
	// Check for *http.Request
	starExpr, ok := expr.(*ast.StarExpr)
	if ok {
		expr = starExpr.X
	}

	selector, ok := expr.(*ast.SelectorExpr)
	if !ok {
		return false
	}

	x, ok := selector.X.(*ast.Ident)
	if !ok {
		return false
	}

	// Check if the type is "http" package and "Request" identifier
	return x.Name == "http" && selector.Sel.Name == "Request"
}

func getExportedFuctions(path string) (map[string]FnType, string, error) {

	node, err := getAstVals(path)
	if err != nil {
		return nil, "", err
	}

	var pkName string
	expFns := make(map[string]FnType)

	ast.Inspect(node, func(n ast.Node) bool {
		switch x := n.(type) {
		case *ast.File:
			pkName = x.Name.Name
		case *ast.FuncDecl:
			if !x.Name.IsExported() {
				break
			}

			fnType := FnType{}

			// Return Type
			if x.Type.Results != nil {
				for _, res := range x.Type.Results.List {
					switch t := res.Type.(type) {
					case *ast.Ident:
						fnType.Rtn = t.Name
					case *ast.SelectorExpr:
						fnType.Rtn = fmt.Sprintf("%s.%s", t.X, t.Sel)
					case *ast.StarExpr:
						if ident, ok := t.X.(*ast.Ident); ok {
							fnType.Rtn = fmt.Sprintf("*%s", ident.Name)
						}
					}
				}
			}

			// Params
			if x.Type.Params != nil {
				for _, param := range x.Type.Params.List {
					for _, name := range param.Names {
						if isHTTPResponseWriter(param.Type) {
							fnType.Params = append(fnType.Params, "http.ResponseWriter")
						} else if isHTTPRequest(param.Type) {
							fnType.Params = append(fnType.Params, "http.Request")
						} else {
							fnType.Params = append(fnType.Params, name.Name)
						}
					}
				}
			}

			// Receiver Type
			if x.Recv != nil {
				for _, res := range x.Recv.List {
					switch t := res.Type.(type) {
					case *ast.Ident:
						fnType.Recv = t.Name
					case *ast.SelectorExpr:
						fnType.Recv = fmt.Sprintf("%s.%s", t.X, t.Sel)
					case *ast.StarExpr:
						if ident, ok := t.X.(*ast.Ident); ok {
							fnType.Recv = fmt.Sprintf("*%s", ident.Name)
						}
					}
				}
			}
			expFns[x.Name.Name] = fnType

		}
		return true
	})
	return expFns, pkName, nil
}

func renderSortedFunctions(imports utils.StringSet, indexGroup []string, pageRenderFunctions []string, pageHandleFunctions []string, routeRenderFunctions []string, routeHandleFunctions []string) (string, error) {

	code := `
// Code generated by gox; DO NOT EDIT.
package gox
import (
	` + imports.Join("\n\t") + `
)

var IndexList = map[string]IndexDefaultFunc{
	` + strings.Join(indexGroup, "\n\t") + `
}

var PageRenderList = []RenderDefault{
	` + strings.Join(pageRenderFunctions, "\n\t") + `
}

var RouteRenderList = []RenderDefault{
	` + strings.Join(routeRenderFunctions, "\n\t") + `
}

var PageHandleList = []Handler{
	` + strings.Join(pageHandleFunctions, "\n\t") + `
}

var RouteHandleList = []Handler{
	` + strings.Join(routeHandleFunctions, "\n\t") + `
}
`
	err := ioutil.WriteFile("../gox/generated.go", []byte(code), 0644)
	if err != nil {
		return "", err
	}
	return code, nil
}

func removeDirWithUnderscorePostfix(path string) string {
	segments := strings.Split(path, "/")
	var output []string
	if len(segments) == 0 {
		return path
	}
	for _, segment := range segments {
		if !strings.HasSuffix(segment, "_") {
			output = append(output, segment)
		}
	}

	return filepath.Join(output...)
}
