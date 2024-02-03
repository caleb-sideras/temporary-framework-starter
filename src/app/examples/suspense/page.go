package examples_suspense

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Suspense",
		ProjectURL:  "/docs/routing/suspense",
		ReadMeURL:   "/examples/suspense/example",
		VideoURL:    "/examples/suspense/code",
		InitialBody: server.Suspense(),
	})
}
