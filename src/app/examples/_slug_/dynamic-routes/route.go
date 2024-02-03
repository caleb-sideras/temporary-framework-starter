package examples_dynamicroutes

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
	"github.com/gorilla/mux"
	"net/http"
)

func Example(w http.ResponseWriter, r *http.Request) templ.Component {

	vars := mux.Vars(r)
	slug := vars["slug"]

	return server.Slug(slug)
}

func Code() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/examples/_markdown/slug.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}
