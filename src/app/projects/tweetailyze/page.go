package tweetailyze

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
	"net/http"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/projects/_markdown/tweetailyze.md")

	if err != nil {
		panic(err)
	}

	return server.Project(server.ProjectType{
		Title:      "Tweetailyze",
		ProjectURL: "https://github.com/caleb-sideras/Tweetailyze",
		Body:       newTempl,
	})
}
