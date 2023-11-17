package main

import (
	// "fmt"
	// "github.com/a-h/templ"
	// root "github.com/caleb-sideras/gox2/src/app"
	// home "github.com/caleb-sideras/gox2/src/app/home"
	"net/http"

	"github.com/caleb-sideras/gox2/gox"
	"github.com/gorilla/mux"
)

const (
	HTML_OUT_DIR        = "../static/html/"
	GENERATED_OUT_DIR   = "./internal/generated/"
	HTML_SERVE_PATH     = "/static/"
	APP_DIR             = "./app"
	PROJECT_PACKAGE_DIR = "github.com/caleb-sideras/gox2/src/"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("../static/"))))

	// http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {

	// 	err := root.Index().Render(templ.WithChildren(req.Context(), home.Home()), res)

	// 	if err != nil {
	// 		panic(err)
	// 	}
	// })
	r := mux.NewRouter()
	g := gox.NewGox(HTML_OUT_DIR)

	// Build your GoX app -> finds your handlers, creates your routes & renders static html
	g.Build(APP_DIR, PROJECT_PACKAGE_DIR)
	g.Run(r, ":8000", HTML_SERVE_PATH)

	// fmt.Println("Listening on :3000")
	// http.ListenAndServe(":3000", nil)
}
