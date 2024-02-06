package examples_suspense

import (
	"calebsideras.com/temporary/src/components/server"
	"github.com/a-h/templ"
)

func Page() templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "Suspense",
		ProjectURL:  "/docs/routing/suspense",
		ReadMeURL:   "/examples/suspense/example",
		VideoURL:    "/examples/suspense/code",
		InitialBody: server.Suspense(),
	})
}
