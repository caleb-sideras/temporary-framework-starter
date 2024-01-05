package musicgpt

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	return server.ProjectTab(server.ProjectTabType{
		Title:       "MusicGPT",
		ProjectURL:  "https://music-gpt.xyz",
		ReadMeURL:   "/projects/musicgpt/readme",
		VideoURL:    "/projects/musicgpt/videos",
		InitialBody: Readme(),
	})
}
