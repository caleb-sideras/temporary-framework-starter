package temporary

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

	"calebsideras.com/temporary/temporary/utils"
	"github.com/a-h/templ"
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

func (t *Temp) Run(r *mux.Router, port string, servePath string) {
	http.Handle("/", r)
	fmt.Println("----------------------------CREATING HANDLERS----------------------------")
	t.handleRoutes(r, t.getETags())
	log.Fatal(http.ListenAndServe(port, nil))
}

func (t *Temp) handleRoutes(r *mux.Router, eTags map[string]string) {
	fmt.Println("Function Type: Page - Render")
	t.handlePageRender(r, eTags)
	fmt.Println("Function Type: Page - Handle")
	t.handlePageHandles(r, eTags)
	fmt.Println("Function Type: Route - Handle")
	t.handleRouteHandles(r, eTags)
	fmt.Println("Function Type: Route - Render")
	t.handleRouteRender(r, eTags)
}

// PageRenderList
func (t *Temp) handlePageRender(r *mux.Router, eTags map[string]string) {
	for _, route := range PageRenderList {
		currRoute := route.Path
		fmt.Printf("   - %s\n", currRoute)
		r.HandleFunc(currRoute+"{slash:/?}", t.createPageHandler(currRoute, eTags))
	}
}

// PageHandleList
func (t *Temp) handlePageHandles(r *mux.Router, eTags map[string]string) {
	for _, route := range PageHandleList {
		currRoute := route
		fmt.Printf("   - %s\n", currRoute.Path)
		switch currRoute.HandleType {
		case DefaultHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", t.createPageDefaultHandler(currRoute, eTags))
		case ResReqHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", t.createPageResReqHandler(currRoute, eTags))
		}
	}
}

// RouteHandleList
func (t *Temp) handleRouteHandles(r *mux.Router, eTags map[string]string) {
	for _, route := range RouteHandleList {
		currRoute := route
		fmt.Printf("   - %s\n", currRoute.Path)
		switch route.HandleType {
		case DefaultHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", t.createRouteDefaultHandler(currRoute, eTags))
		case ResReqHandler:
			r.HandleFunc(currRoute.Path+"{slash:/?}", t.createRouteResReqHandler(currRoute, eTags))
		}
	}
}

// RouteRenderList
func (t *Temp) handleRouteRender(r *mux.Router, eTags map[string]string) {
	for _, route := range RouteRenderList {
		currRoute := route
		fmt.Printf("   - %s\n", currRoute.Path)
		r.HandleFunc(currRoute.Path+"{slash:/?}", t.createRouteRenderHandler(currRoute.Path, eTags))
	}
}

// PageRender
func (t *Temp) createPageHandler(route string, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		logs := fmt.Sprintf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)
		eTagPath := ""
		pagePath := ""

		handlePage := func() {
			logs = fmt.Sprintf("%s %s", logs, "Partial")
			eTagPath = filepath.Join(route, PAGE_BODY_OUT_FILE)
			pagePath = filepath.Join(t.OutputDir, eTagPath)
		}

		handleBPage := func() {
			handlePage()
			setBoostHeaders(w)
		}

		handleIndex := func() {
			logs = fmt.Sprintf("%s %s", logs, "Full-Page")
			eTagPath = filepath.Join(route, PAGE_OUT_FILE)
			pagePath = filepath.Join(t.OutputDir, eTagPath)
		}

		formatRequest(w, r, handlePage, handleBPage, handleIndex, handleIndex)

		if eTag := r.Header.Get("If-None-Match"); eTag == eTags[eTagPath] {
			log.Println(fmt.Sprintf("%s %s %d", logs, pagePath, http.StatusNotModified))
			w.WriteHeader(http.StatusNotModified)
			return
		}

		log.Println(fmt.Sprintf("%s %s %d", logs, pagePath, http.StatusOK))

		setPageHeaders(w, eTagPath, eTags)
		http.ServeFile(w, r, pagePath)
	}
}

// PageHandle - DefaultHandler
func (t *Temp) createPageDefaultHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		logs := fmt.Sprintf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)

		var buffer bytes.Buffer

		handlePage := func() {
			logs = fmt.Sprintf("%s %s", logs, "Partial")
			err := route.Handler.(func() templ.Component)().Render(r.Context(), &buffer)
			t.handleRenderError(err, w, logs)
		}

		// handleBoostPage := func() {
		// 	handlePage()
		// 	setBoostHeaders(w)
		// }

		handleIndex := func() {
			logs = fmt.Sprintf("%s %s", logs, "Full-Page")
			err := IndexList[route.Path]().Render(templ.WithChildren(r.Context(), route.Handler.(func() templ.Component)()), &buffer)
			t.handleRenderError(err, w, logs)
		}

		formatRequest(w, r, handlePage, handleIndex, handleIndex, handleIndex)
		// formatRequest(w, r, handlePage, handleBoostPage, handleIndex, handleIndex)

		eTag := utils.GenerateETag(buffer.String())
		t.handleWriter(w, r, eTag, buffer.Bytes(), eTags, logs)
	}
}

// PageHandle - ResResqHandler
func (t *Temp) createPageResReqHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		logs := fmt.Sprintf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)
		var buffer bytes.Buffer

		handlePage := func() {
			logs = fmt.Sprintf("%s %s", logs, "Partial")
			err := route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)(w, r).Render(r.Context(), &buffer)
			t.handleRenderError(err, w, logs)
		}

		// handleBoostPage := func() {
		// 	handlePage()
		// 	setBoostHeaders(w)
		// }

		handleIndex := func() {
			logs = fmt.Sprintf("%s %s", logs, "Full-Page")
			err := IndexList[route.Path]().Render(templ.WithChildren(r.Context(), route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)(w, r)), &buffer)
			t.handleRenderError(err, w, logs)
		}

		formatRequest(w, r, handlePage, handleIndex, handleIndex, handleIndex)
		// formatRequest(w, r, handlePage, handleBoostPage, handleIndex, handleIndex)

		log.Println(fmt.Sprintf("%s %d", logs, http.StatusOK))

		w.Header().Set("Vary", "HX-Request")
		w.Header().Set("Cache-Control", "no-cache")
		w.Write(buffer.Bytes())
	}
}

// RouteHandleList - DefaultHandler
func (t *Temp) createRouteDefaultHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		logs := fmt.Sprintf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)
		var buffer bytes.Buffer

		err := route.Handler.(func() templ.Component)().Render(r.Context(), &buffer)
		t.handleRenderError(err, w, logs)

		log.Println(fmt.Sprintf("%s %d", logs, http.StatusOK))

		setRouteHeaders(w)
		w.Write(buffer.Bytes())
	}
}

// RouteHandleList - ResReqHandler
func (t *Temp) createRouteResReqHandler(route Handler, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		logs := fmt.Sprintf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)

		var buffer bytes.Buffer

		err := route.Handler.(func(http.ResponseWriter, *http.Request) templ.Component)(w, r).Render(r.Context(), &buffer)
		t.handleRenderError(err, w, logs)

		log.Println(fmt.Sprintf("%s %d", logs, http.StatusOK))

		setRouteHeaders(w)
		w.Write(buffer.Bytes())
	}
}

// RouteRender
func (t *Temp) createRouteRenderHandler(route string, eTags map[string]string) pageHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		logs := fmt.Sprintf("%s %s %s", r.RemoteAddr, r.Method, r.URL.Path)

		eTagPath := filepath.Join(route, ROUTE_OUT_FILE)
		pagePath := filepath.Join(t.OutputDir, eTagPath)

		if eTag := r.Header.Get("If-None-Match"); eTag == eTags[eTagPath] {
			log.Println(fmt.Sprintf("%s %s %d", logs, pagePath, http.StatusNotModified))
			w.WriteHeader(http.StatusNotModified)
			return
		}

		log.Println(fmt.Sprintf("%s %s %d", logs, pagePath, http.StatusOK))

		setRouteRenderHeaders(w, eTagPath, eTags)

		http.ServeFile(w, r, pagePath)
	}
}

func (t *Temp) getETags() map[string]string {
	eTags := make(map[string]string)

	file, err := os.Open(filepath.Join(t.OutputDir, ETAG_FILE))
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

func (t *Temp) handleRenderError(err error, w http.ResponseWriter, logs string) {
	if err != nil {
		log.Println(fmt.Sprintf("%s %d", logs, http.StatusInternalServerError))
		w.WriteHeader(http.StatusInternalServerError)
	}
}

func (t *Temp) handleWriter(w http.ResponseWriter, r *http.Request, eTag string, content []byte, eTags map[string]string, logs string) {
	if rEtag := r.Header.Get("If-None-Match"); rEtag == eTag {
		log.Println(fmt.Sprintf("%s %d", logs, http.StatusNotModified))
		w.WriteHeader(http.StatusNotModified)
		return
	}
	log.Println(fmt.Sprintf("%s %d", logs, http.StatusOK))
	setHeaders(w, eTag)
	w.Write(content)
}
