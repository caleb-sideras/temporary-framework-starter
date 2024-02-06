package examples_todo

import (
	"calebsideras.com/temporary/src/components/server"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Todo",
		ProjectURL:  "",
		ReadMeURL:   "/examples/todo/example",
		VideoURL:    "/examples/todo/code",
		InitialBody: server.Todo(),
	})
}
