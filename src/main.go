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

		t := temp.NewTemp()

		switch os.Args[1] {
		case "build":
			t.Build()

		case "render":
			t.Render()

		case "run":

			http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

			t.Run(mux.NewRouter(), ":8000")

		default:
			fmt.Println("Invalid argument. Use 'build' or 'run'.")
		}
	} else {
		fmt.Println("Please provide an argument: 'build' or 'run'.")
	}
}
