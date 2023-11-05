package main

import (
	"fmt"
	"github.com/a-h/templ"
	index "github.com/caleb-sideras/gox2/src/app"
	home "github.com/caleb-sideras/gox2/src/app/home"
	"net/http"
)

func main() {
	homeBody := home.Home(home.VarHomeCards, home.VarHomeSections)
	homePage := index.Index(homeBody)

	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))
	http.Handle("/", templ.Handler(homePage))

	fmt.Println("Listening on :3000")
	http.ListenAndServe(":3000", nil)
}
