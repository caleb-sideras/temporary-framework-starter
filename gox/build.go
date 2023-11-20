package gox

import (
	"context"
	"errors"
	"fmt"
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/gox/utils"
	"go/ast"
	"go/parser"
	"go/token"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

type goxDir struct {
	FileType string
	FilePath string
}

type fnType struct {
	Recv   string   // Receiver type
	Rtn    string   // Return type
	Params []string // Param types
}

var FILE_CHECK_LIST = map[string]bool{
	INDEX_FILE: true,
	PAGE_FILE:  true,
	ROUTE_FILE: true,
}

func (g *Gox) Build(startDir string, packageDir string) {

	fmt.Println("--------------------------WALKING DIRECTORY--------------------------")
	dirFiles, err := walkDirectoryStructure(startDir)
	if err != nil {
		panic(err)
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

func walkDirectoryStructure(startDir string) (map[string]map[string][]goxDir, error) {

	result := make(map[string]map[string][]goxDir)

	err := filepath.Walk(startDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if info.IsDir() && strings.HasPrefix(info.Name(), "_") {
			return filepath.SkipDir
		}

		if info.IsDir() && path != startDir {
			files := make(map[string][]goxDir)

			filepath.Walk(path, func(innerPath string, innerInfo os.FileInfo, innerErr error) error {

				if innerInfo.IsDir() && strings.HasPrefix(innerInfo.Name(), "_") {
					return filepath.SkipDir
				}

				ext := filepath.Ext(innerPath)
				if !innerInfo.IsDir() && filepath.Dir(innerPath) == path && FILE_CHECK_LIST[filepath.Base(innerPath)] && filepath.Base(innerPath) != INDEX_FILE {
					if _, exists := files[ext]; !exists {
						files[ext] = []goxDir{}
					}
					files[ext] = append(files[ext], goxDir{filepath.Base(innerPath), innerPath})
				}
				return nil
			})

			currDir := path
			for {
				indexFile := filepath.Join(currDir, INDEX_FILE)
				if _, err := os.Stat(indexFile); !os.IsNotExist(err) {
					if _, ok := files[filepath.Ext(indexFile)]; !ok {
						files[filepath.Ext(indexFile)] = []goxDir{}
					}
					files[filepath.Ext(indexFile)] = append(files[filepath.Ext(indexFile)], goxDir{filepath.Base(indexFile), indexFile})
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

func printDirectoryStructure(dirFiles map[string]map[string][]goxDir) {
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

type sortedFunctions struct {
	indexGroup           map[string]string
	routeRenderFunctions []string
	routeHandleFunctions []string
	pageRenderFunctions  []string
	pageHandleFunctions  []string
	imports              utils.StringSet
}

func getSortedFunctions(dirFiles map[string]map[string][]goxDir, packageDir string) (utils.StringSet, []string, []string, []string, []string, []string) {

	var indexGroup map[string]string = make(map[string]string)
	var routeRenderFunctions []string
	var routeHandleFunctions []string
	var pageRenderFunctions []string
	var pageHandleFunctions []string
	imports := utils.NewStringSet()

	var sf sortedFunctions = sortedFunctions{
		indexGroup,
		routeRenderFunctions,
		routeHandleFunctions,
		pageRenderFunctions,
		pageHandleFunctions,
		imports,
	}

	for dir, files := range dirFiles {
		if len(files) <= 0 {
			continue
		}

		fmt.Println("Directory:", dir)

		var goFiles []goxDir
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
				err := sf.getIndexFunction(gd, packageDir, leafPath)
				if err != nil {
					break
				}

			case PAGE_FILE:
				err := sf.getPageFunction(gd, leafPath, &needImport)
				if err != nil {
					break
				}

			case ROUTE_FILE:
				err := sf.getRouteFunction(gd, leafPath, &needImport)
				if err != nil {
					break
				}

			}
		}

		if needImport {
			sf.imports.Add(`"` + packageDir + dir + `"`)
		}
	}
	var indexGroupFinal []string
	for path, index := range sf.indexGroup {
		indexGroupFinal = append(indexGroupFinal, fmt.Sprintf(`"%s" : %s,`, path, index))
	}

	return sf.imports, indexGroupFinal, sf.pageRenderFunctions, sf.pageHandleFunctions, sf.routeRenderFunctions, sf.routeHandleFunctions
}

// Gets Index functions - returns soft error
func (sf *sortedFunctions) getIndexFunction(gd goxDir, packageDir string, leafPath string) error {
	fmt.Println("   index.go")

	expFns, pkName, err := getExportedFuctions(gd.FilePath)
	if err != nil {
		panic(err)
	}

	if pkName == "" {
		return errors.New(fmt.Sprintf("   - No defined package name in %s", gd.FilePath))

	}

	if expFns == nil {
		return errors.New(fmt.Sprintf("   - No exported functions in %s", gd.FilePath))
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

			sf.imports.Add(`"` + packageDir + filepath.Dir(gd.FilePath) + `"`)
			sf.indexGroup[leafPath] = formatIndexFunction(pkName, expFn)
			fmt.Printf("   - Extracted -> func %s (%s)\n", expFn, gd.FilePath)
		}
	}
	return nil
}

// Gets various types of Page functions - returns soft error
func (sf *sortedFunctions) getPageFunction(gd goxDir, leafPath string, needImport *bool) error {
	fmt.Println("   page.go")

	expFns, pkName, err := getExportedFuctions(gd.FilePath)
	if err != nil {
		panic(err)
	}

	if pkName == "" {
		return errors.New(fmt.Sprintf("   - No defined package name in %s", gd.FilePath))
	}

	if expFns == nil {
		return errors.New(fmt.Sprintf("   - No exported functions in %s", gd.FilePath))
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
			sf.pageRenderFunctions = append(sf.pageRenderFunctions, formatFn)
			*needImport = true
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

			sf.pageHandleFunctions = append(sf.pageHandleFunctions, formatFn)
			*needImport = true
			fmt.Printf("   - Extracted -> func %s\n", expFn)
		}
	}
	return nil
}

// Gets various types of Route functions - returns soft error
func (sf *sortedFunctions) getRouteFunction(gd goxDir, leafPath string, needImport *bool) error {
	fmt.Println("   route.go")

	expFns, pkName, err := getExportedFuctions(gd.FilePath)
	if err != nil {
		panic(err)
	}

	if pkName == "" {
		return errors.New(fmt.Sprintf("   - No defined package name in %s", gd.FilePath))
	}

	if expFns == nil {
		return errors.New(fmt.Sprintf("   - No exported functions in %s", gd.FilePath))
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
			sf.routeRenderFunctions = append(sf.routeRenderFunctions, formatFn)
			*needImport = true
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

			sf.routeHandleFunctions = append(sf.routeHandleFunctions, formatFn)
			*needImport = true
			fmt.Printf("   - Extracted -> func %s\n", expFn)
		}
	}
	return nil
}

func getExportedFuctions(path string) (map[string]fnType, string, error) {

	node, err := getAstVals(path)
	if err != nil {
		return nil, "", err
	}

	var pkName string
	expFns := make(map[string]fnType)

	ast.Inspect(node, func(n ast.Node) bool {
		switch x := n.(type) {
		case *ast.File:
			pkName = x.Name.Name
		case *ast.FuncDecl:
			if !x.Name.IsExported() {
				break
			}

			fnType := fnType{}

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

// RenderStaticFiles() renders all static files defined by the user
func (g *Gox) renderStaticFiles() error {

	output := ""

	for _, render := range PageRenderList {

		fmt.Println("Directory:", render.Path)

		// page.html
		fmt.Println("   -", PAGE_OUT_FILE)
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
		fmt.Println("   -", PAGE_BODY_OUT_FILE)
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

		fmt.Println("Directory:", render.Path)

		// route.html
		fmt.Println("   -", ROUTE_OUT_FILE)
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
