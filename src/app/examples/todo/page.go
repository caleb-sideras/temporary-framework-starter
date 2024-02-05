package examples_todo

import (
	"net/http"

	"calebsideras.com/temporary/src/components/server"
	"github.com/a-h/templ"
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
