package examples_staticrender

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
)

func Page() templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Static Render",
		ProjectURL:  "",
		ReadMeURL:   "/examples/static-render/example",
		VideoURL:    "/examples/static-render/code",
		InitialBody: Example(),
	})
}
