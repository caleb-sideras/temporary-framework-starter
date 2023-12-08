package example

import (
	"github.com/a-h/templ"
	home "github.com/caleb-sideras/gox2/src/app/home_"
	components "github.com/caleb-sideras/gox2/src/app/home_/components"
	"net/http"
)

func Example_() templ.Component {

	return components.Test2()
}

func Example2(w http.ResponseWriter, r *http.Request) templ.Component {

	return components.HomeTempl(home.VarHomeCards, home.VarHomeSections)
}

func Example3() templ.Component {

	return components.HomeTempl(home.VarHomeCards, home.VarHomeSections)
}
