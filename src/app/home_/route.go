package home

import (
	"github.com/a-h/templ"
	components "github.com/caleb-sideras/gox2/src/app/home_/components"
	"net/http"
)

func Test_() templ.Component {

	return components.HomeTempl(VarHomeCards, VarHomeSections)
}

func Test2(w http.ResponseWriter, r *http.Request) templ.Component {

	return components.HomeTempl(VarHomeCards, VarHomeSections)
}

func Test3() templ.Component {

	return components.HomeTempl(VarHomeCards, VarHomeSections)
}
