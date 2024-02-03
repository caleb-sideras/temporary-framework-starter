package examples_dynamicroutes

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Dynamic Routes",
		ProjectURL:  "/docs/routing/dynamic-routes",
		ReadMeURL:   "/examples/_replace-me_/dynamic-routes/example",
		VideoURL:    "/examples/_replace-me_/dynamic-routes/code",
		InitialBody: Example(w, r),
	})
}
