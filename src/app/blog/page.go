package blog

import (
	// "net/http"

	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Page_() templ.Component {

	tLinkList := []utils.TLinkContent{
		{
			Title:       "Building The Temporary Standard",
			Description: "An view into my current, temporary, mental model of the web.",
			Src:         "/static/assets/the_web.jpg",
			Alt:         "Funny Image",
			Href:        "/blog/temporarystandard",
			Boost:       "true",
		},
	}

	return server.Grid(tLinkList)

}
