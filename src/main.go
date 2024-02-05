package main

import (
	"fmt"
	"net/http"
	"os"

	t "calebsideras.com/temporary/temporary"
	"github.com/gorilla/mux"
)

const (
	HTML_OUT_DIR    = "./static/html/"
	HTML_SERVE_PATH = "/static/"
	APP_DIR         = "src/app"
	PROJECT_PACKAGE = "calebsideras.com/temporary/"
)

func main() {

	if len(os.Args) > 1 {

		switch os.Args[1] {
		case "build":
			g := t.NewTemp(HTML_OUT_DIR)
			g.Build(APP_DIR, PROJECT_PACKAGE)

		case "run":
			g := t.NewTemp(HTML_OUT_DIR)

			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

			r := mux.NewRouter()

			g.Run(r, ":8000", HTML_SERVE_PATH)

		default:
			fmt.Println("Invalid argument. Use 'build' or 'run'.")
		}
	} else {
		fmt.Println("Please provide an argument: 'build' or 'run'.")
	}
}
