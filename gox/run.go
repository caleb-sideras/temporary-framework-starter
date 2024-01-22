package gox

import (
	"bufio"
	"bytes"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"reflect"
	"strings"

	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/gox/utils"
	"github.com/gorilla/mux"
)

type requestType int64

const (
	NormalRequest requestType = iota
	HxGet_Index
	HxGet_Page
	HxBoost_Page
	HxBoost_Index
	ErrorRequest
)

type pageHandler func(w http.ResponseWriter, r *http.Request)

func (g *Gox) Run(r *mux.Router, port string, servePath string) {
	http.Handle("/", r)
	fmt.Println("----------------------------CREATING HANDLERS----------------------------")
	g.handleRoutes(r, g.getETags())
	log.Fatal(http.ListenAndServe(port, nil))
}

func (g *Gox) handleRoutes(r *mux.Router, eTags map[string]string) {
	fmt.Println("Function Type: Page - Render")
	g.handlePageRender(r, eTags)
	fmt.Println("Function Type: Page - Handle")
	g.handlePageHandles(r, eTags)
	fmt.Println("Function Type: Route - Handle")
	g.handleRouteHandles(r, eTags)
	fmt.Println("Function Type: Route - Render")
	g.handleRouteRender(r, eTags)
}

// PageRenderList
func (g *Gox) handlePageRender(r *mux.Router, eTags map[string]string) {
	for _, route := range PageRenderList {
		currRoute := route.Path
		fmt.Printf("   - %s\n", currRoute)
		r.HandleFunc(currRoute+"{slash:/?}", g.createPageHandler(currRoute, eTags))
	}
}

// PageHandleList
func (g *Gox) handlePageHandles(r *mux.Router, eTags map[string]string) {
	for _, route := range PageHandleList {
		currRoute := route
		fmt.Printf("   - %s\n", currRoute.Path)
		switch currRoute.HandleType {
		case DefaultHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", g.createPageDefaultHandler(currRoute, eTags))
		case ResReqHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", g.createPageResReqHandler(currRoute, eTags))
		}
	}
}

// RouteHandleList
func (g *Gox) handleRouteHandles(r *mux.Router, eTags map[string]string) {
	for _, route := range RouteHandleList {
		currRoute := route
		fmt.Printf("   - %s\n", currRoute.Path)
		switch route.HandleType {
		case DefaultHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", g.createRouteDefaultHandler(currRoute, eTags))
		case ResReqHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", g.createRouteResReqHandler(currRoute, eTags))
		}
	}
}

// RouteRenderList
func (g *Gox) handleRouteRender(r *mux.Router, eTags map[string]string) {
	for _, route := range RouteRenderList {
		currRoute := route
		fmt.Printf("   - %s\n", currRoute.Path)
		r.HandleFunc(currRoute.Path+"{slash:/?}", g.createRouteRenderHandler(currRoute.Path, eTags))
	}
}

// PageRender
func (g *Gox) createPageHandler(route string, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		/**
		* NOTE
		* Changed eTagPath from r.URL.Path -> route. Allows slugs.
		**/
		log.Println("- - - - - - - - - - - -")
		eTagPath := ""
		pagePath := ""

		handlePage := func() {
			log.Println("Partial")
			eTagPath = filepath.Join(route, PAGE_BODY_OUT_FILE)
			pagePath = filepath.Join(g.OutputDir, eTagPath)
		}

		handleBPage := func() {
			handlePage()
			setBoostHeaders(w)
		}

		handleIndex := func() {
			log.Println("Full-Page")
			eTagPath = filepath.Join(route, PAGE_OUT_FILE)
			pagePath = filepath.Join(g.OutputDir, eTagPath)
		}

		formatRequest(w, r, handlePage, handleBPage, handleIndex, handleIndex)

		log.Println("Path:", pagePath)
		log.Println("ETag:", eTags[eTagPath])

		if eTag := r.Header.Get("If-None-Match"); eTag == eTags[eTagPath] {
			log.Println("403: status not modified")
			w.WriteHeader(http.StatusNotModified)
			return
		}

		setPageHeaders(w, eTagPath, eTags)
		http.ServeFile(w, r, pagePath)
	}
}

// PageHandle - DefaultHandler
func (g *Gox) createPageDefaultHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("- - - - - - - - - - - -")
		var buffer bytes.Buffer

		handlePage := func() {
			log.Println("Partial")
			err := route.Handler.(func() templ.Component)().Render(r.Context(), &buffer)
			g.handleRenderError(err, w)
		}

		handleBoostPage := func() {
			handlePage()
			setBoostHeaders(w)
		}

		handleIndex := func() {
			log.Println("Full-Page")
			err := IndexList[route.Path]().Render(templ.WithChildren(r.Context(), route.Handler.(func() templ.Component)()), &buffer)
			g.handleRenderError(err, w)
		}

		formatRequest(w, r, handlePage, handleBoostPage, handleIndex, handleIndex)

		eTag := utils.GenerateETag(buffer.String())
		g.handleETag(w, r, eTag, buffer.Bytes(), eTags)

		w.Header().Set("Vary", "HX-Request")
		w.Header().Set("Cache-Control", "no-cache")
		w.Header().Set("ETag", eTag)
		w.Write(buffer.Bytes())
	}
}

// PageHandle - ResResqHandler
func (g *Gox) createPageResReqHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("- - - - - - - - - - - -")
		var buffer bytes.Buffer

		handlePage := func() {
			log.Println("Partial")
			err := route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)(w, r).Render(r.Context(), &buffer)
			g.handleRenderError(err, w)
		}

		handleBoostPage := func() {
			handlePage()
			setBoostHeaders(w)
		}

		handleIndex := func() {
			log.Println("Full-Page")
			err := IndexList[route.Path]().Render(templ.WithChildren(r.Context(), route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)(w, r)), &buffer)
			g.handleRenderError(err, w)
		}

		formatRequest(w, r, handlePage, handleBoostPage, handleIndex, handleIndex)

		w.Header().Set("Vary", "HX-Request")
		w.Header().Set("Cache-Control", "no-cache")
		w.Write(buffer.Bytes())
	}
}

// RouteHandleList - DefaultHandler
func (g *Gox) createRouteDefaultHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("- - - - - - - - - - - -")
		var buffer bytes.Buffer

		err := route.Handler.(func() templ.Component)().Render(r.Context(), &buffer)
		g.handleRenderError(err, w)

		setRouteHeaders(w)
		w.Write(buffer.Bytes())
	}
}

// RouteHandleList - ResReqHandler
func (g *Gox) createRouteResReqHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("- - - - - - - - - - - -")
		var buffer bytes.Buffer

		err := route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)(w, r).Render(r.Context(), &buffer)
		g.handleRenderError(err, w)

		setRouteHeaders(w)
		w.Write(buffer.Bytes())
	}
}

// RouteRender
func (g *Gox) createRouteRenderHandler(route string, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		log.Println("- - - - - - - - - - - -")
		/**
		* NOTE
		* Changed eTagPath from r.URL.Path -> route. Allows slugs.
		**/
		eTagPath := filepath.Join(route, ROUTE_OUT_FILE)
		pagePath := filepath.Join(g.OutputDir, eTagPath)
		log.Println(route, pagePath, eTagPath)

		if eTag := r.Header.Get("If-None-Match"); eTag == eTags[eTagPath] {
			log.Println("403: status not modified")
			w.WriteHeader(http.StatusNotModified)
			return
		}

		log.Println("Serving File:", pagePath)

		setRouteRenderHeaders(w, eTagPath, eTags)

		http.ServeFile(w, r, pagePath)
	}
}

func (g *Gox) getETags() map[string]string {
	eTags := make(map[string]string)

	file, err := os.Open(filepath.Join(g.OutputDir, ETAG_FILE))
	if err != nil {
		log.Fatalf("Could not create file: %v", err)
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

func determineRequest(w http.ResponseWriter, r *http.Request) requestType {
	if !utils.IsHtmxRequest(r) {
		return NormalRequest
	}

	log.Println("HX-Request")

	if !utils.IsHxBoosted(r) {
		if r.URL.Query().Get("index") == "true" {
			return HxGet_Index
		}
		return HxGet_Page
	}

	htmxUrl, err := utils.LastElementOfURL(utils.GetHtmxRequestURL(r))
	if err != nil {
		return ErrorRequest
	}

	if _, ok := IndexList[htmxUrl]; !ok {
		return HxBoost_Index
	}

	if reflect.ValueOf(IndexList[htmxUrl]).Pointer() == reflect.ValueOf(IndexList[r.URL.Path]).Pointer() {
		return HxBoost_Page
	}

	return HxBoost_Index
}

func setBoostHeaders(w http.ResponseWriter) {
	w.Header().Set("HX-Retarget", "main")
	w.Header().Set("HX-Reswap", "innerHTML transition:true")
}

func setPageHeaders(w http.ResponseWriter, eTagPath string, eTags map[string]string) {
	w.Header().Set("Vary", "HX-Request")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("ETag", eTags[eTagPath])
}

func setRouteRenderHeaders(w http.ResponseWriter, eTagPath string, eTags map[string]string) {
	w.Header().Set("Vary", "HX-Request")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("ETag", eTags[eTagPath])
}

func setRouteHeaders(w http.ResponseWriter) {
	w.Header().Set("Vary", "HX-Request")
	w.Header().Set("Cache-Control", "no-cache")
}

func setHeaders(w http.ResponseWriter, eTag string) {
	w.Header().Set("Vary", "HX-Request")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("ETag", eTag)
}

func (g *Gox) handleRenderError(err error, w http.ResponseWriter) {
	if err != nil {
		log.Printf("500: Issue rendering: %v\n", err)
		w.WriteHeader(http.StatusInternalServerError)
	}
}

func (g *Gox) handleETag(w http.ResponseWriter, r *http.Request, eTag string, content []byte, eTags map[string]string) {
	if rEtag := r.Header.Get("If-None-Match"); rEtag == eTag {
		log.Println("304: status not modified")
		w.WriteHeader(http.StatusNotModified)
		return
	}
	setHeaders(w, eTag)
	w.Write(content)
}
