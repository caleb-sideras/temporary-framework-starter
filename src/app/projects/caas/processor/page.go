package caas_processor

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/projects/_markdown/caas_processor.md")

	if err != nil {
		panic(err)
	}

	return server.Project(server.ProjectType{
		Title:      "CAAS",
		ProjectURL: "https://github.com/caleb-sideras/CAAS/blob/main/AudioProcessor.py",
		Body:       newTempl,
	})
}
