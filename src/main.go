package main

import (
	"fmt"
	"net/http"
	"os"

	temp "calebsideras.com/temporary/temporary"
	"github.com/gorilla/mux"
)

func main() {

	if len(os.Args) > 1 {

		switch os.Args[1] {
		case "build":
			t := temp.NewTemp()
			t.Build()

		case "render":
			t := temp.NewTemp()
			t.Render()

		case "run":
			t := temp.NewTemp()

			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

			r := mux.NewRouter()

			t.Run(r, ":8000")

		default:
			fmt.Println("Invalid argument. Use 'build' or 'run'.")
		}
	} else {
		fmt.Println("Please provide an argument: 'build' or 'run'.")
	}
}
