package home

import (
	"net/http"

	"github.com/a-h/templ"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return HomeTempl()
}
