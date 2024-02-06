package examples_staticrender

import (
	"calebsideras.com/temporary/src/components/server"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Static Render",
		ProjectURL:  "/docs/routing/static-pages-and-routes",
		ReadMeURL:   "/examples/static-render/example",
		VideoURL:    "/examples/static-render/code",
		InitialBody: Example(),
	})
}
