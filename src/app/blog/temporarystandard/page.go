package temporarystandard

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/blog/_markdown/building_temporary.md")

	if err != nil {
		panic(err)
	}

	return server.Project(server.ProjectType{
		Title:      "Building The Temporary Standard",
		ProjectURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		Body:       newTempl,
	})
}
