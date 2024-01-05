package peoplepedia

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/projects/_markdown/peoplepedia.md")

	if err != nil {
		panic(err)
	}

	return server.Project(server.ProjectType{
		Title:      "PeoplePedia",
		ProjectURL: "https://github.com/caleb-sideras/PeoplePedia-Frontend",
		Body:       newTempl,
	})
}
