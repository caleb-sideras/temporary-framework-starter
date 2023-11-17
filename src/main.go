package main

import (
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

	g := gox.NewGox(HTML_OUT_DIR)
	g.Build(APP_DIR, PROJECT_PACKAGE_DIR)

	r := mux.NewRouter()
	g.Run(r, ":8000", HTML_SERVE_PATH)
}
