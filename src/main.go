package main

import (
	"fmt"
	"github.com/caleb-sideras/gox2/gox"
	"github.com/gorilla/mux"
	"net/http"
	"os"
	"strings"
)

const (
	HTML_OUT_DIR        = "./static/html/"
	GENERATED_OUT_DIR   = "./internal/generated/"
	HTML_SERVE_PATH     = "/static/"
	APP_DIR             = "src/app"
	PROJECT_PACKAGE_DIR = "github.com/caleb-sideras/gox2/"
)

func main() {

	if len(os.Args) > 1 {

		switch os.Args[1] {
		case "build":
			g := gox.NewGox(HTML_OUT_DIR)
			g.Build(APP_DIR, PROJECT_PACKAGE_DIR)

		case "run":
			g := gox.NewGox(HTML_OUT_DIR)
			// g.Build(APP_DIR, PROJECT_PACKAGE_DIR)

			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

			r := mux.NewRouter()
			// r.Use(detectSafari)
			g.Run(r, ":8000", HTML_SERVE_PATH)

		default:
			fmt.Println("Invalid argument. Use 'build' or 'run'.")
		}
	} else {
		fmt.Println("Please provide an argument: 'build' or 'run'.")
	}
}

func detectSafari(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		userAgent := r.Header.Get("User-Agent")

		if strings.Contains(userAgent, "Safari") && !strings.Contains(userAgent, "Chrome") {
			http.Error(w, "i do not support safari. please use chrome or firefox", http.StatusBadRequest)
			return
		}

		next.ServeHTTP(w, r)
	})
}
