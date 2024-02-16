package home

import (
	"github.com/a-h/templ"
)

type TLink2 struct {
	Title       string
	Description string
	Href        string
	HxBoost     bool
}

func Page_() templ.Component {

	links := []TLink2{
		{
			Title:       "Documentation",
			Description: "Find in-depth information about Temporary features and API.",
			Href:        "https://temporary-framework.org/docs",
			HxBoost:     false,
		},
		{
			Title:       "Examples",
			Description: "Explore and copy boilerplate examples",
			Href:        "https://temporary-framework.org/examples/todo",
			HxBoost:     false,
		},
		{
			Title:       "temporary-website",
			Description: "The code for the official Temporary website is public.",
			Href:        "https://github.com/caleb-sideras/temporary-framework-website",
			HxBoost:     false,
		},
	}

	return HomeTempl(links)
}
