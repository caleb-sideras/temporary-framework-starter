package gox

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Readme() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/projects/_markdown/goxframework.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}

func Videos() templ.Component {
	tLinkList := []utils.TLinkContent{
		{
			Title:       "Introducing GoX",
			Description: "I created a framework called GoX to help streamline the Go and HTML workflow. The framework includes an app router to easily traverse directories and files, as well as the ability to serve static HTML files with separate data and HTML components. I originally disliked HTMX but later gained an appreciation for it and used it in the framework. The framework aims to minimize code duplication and improve the organization of code.",
			Src:         "https://img.youtube.com/vi/_gDwxfE5KKU/hqdefault.jpg",
			Alt:         "GoX Image",
			Href:        "https://www.youtube.com/watch?v=_gDwxfE5KKU",
		},
	}
	return server.GridVideos(tLinkList)
}
