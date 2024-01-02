package gox

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:      "GoX Framework",
		ProjectURL: "https://goxFramework.org",
		ReadMeURL:  "/projects/goxFramework/readme",
		VideoURL:   "/projects/goxFramework/videos",
	})
}
