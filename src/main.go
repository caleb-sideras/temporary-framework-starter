package main

import (
	"fmt"
	"github.com/a-h/templ"
	root "github.com/caleb-sideras/gox2/src/app"
	home "github.com/caleb-sideras/gox2/src/app/home"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {

		err := root.Index().Render(templ.WithChildren(req.Context(), home.Home()), res)

		if err != nil {
			panic(err)
		}
	})

	fmt.Println("Listening on :3000")
	http.ListenAndServe(":3000", nil)
}
