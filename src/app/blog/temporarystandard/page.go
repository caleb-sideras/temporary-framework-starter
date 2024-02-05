package temporarystandard

import (
	"net/http"

	"calebsideras.com/temporary/src/components/server"
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
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
