package examples_dynamicroutes

import (
	"net/http"

	"calebsideras.com/temporary/src/components/server"
	"github.com/a-h/templ"
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
