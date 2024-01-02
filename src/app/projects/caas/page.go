package caas

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:      "CAAS",
		ProjectURL: "https://github.com/caleb-sideras/caas",
		ReadMeURL:  "/projects/caas/readme",
		VideoURL:   "/projects/caas/videos",
	})
}
