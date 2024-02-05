package blog

import (
	// "net/http"

	"calebsideras.com/temporary/src/components/server"
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
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
