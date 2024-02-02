package examples_todo

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Todo",
		ProjectURL:  "",
		ReadMeURL:   "/examples/todo/example",
		VideoURL:    "/examples/todo/code",
		InitialBody: server.Todo(),
	})
}
