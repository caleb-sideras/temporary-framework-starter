package home

import (
	"github.com/a-h/templ"
	// "net/http"
)

func Example_() templ.Component {

	return HomeTempl()
}

// func Example2(w http.ResponseWriter, r *http.Request) templ.Component {

// 	return components.HomeTempl(home.VarHomeCards, home.VarHomeSections)
// }

// func Example3() templ.Component {

// 	return components.HomeTempl(home.VarHomeCards, home.VarHomeSections)
// }
