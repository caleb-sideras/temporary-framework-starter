package home

import (
	"github.com/a-h/templ"
)

type TLink2Hx struct {
	HxGet       string
	HxTarget    string
	HxPushURL   bool
	Title       string
	Description string
	HxBoost     bool
}

type TLink2Href struct {
	Title       string
	Description string
	Href        string
}

func Page_() templ.Component {

	links := []TLink2Hx{
		{
			HxGet:       "/docs/routing",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "File-Based Routing",
			Description: "Temporary uses a file-system based router where folders are used to define routes.",
			HxBoost:     true,
		},
		{
			HxGet:       "/docs/routing/defining-routes",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "Route Handling",
			Description: "Route specific UI that perform unique actions.",
			HxBoost:     true,
		},
		{
			HxGet:       "/docs/routing/pages-and-index",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "Server Components",
			Description: "Add Templ Components without the need to handle rendering or routing.",
			HxBoost:     true,
		},
		{
			HxGet:       "/docs/routing/dynamic-routes",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "Dynamic Routes",
			Description: "Create routes from dynamic data known at request-time.",
			HxBoost:     true,
		},
		{
			HxGet:       "/docs/routing/suspense",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "Lazy Loading",
			Description: "Instantly load UI from the server and lazy load your content.",
			HxBoost:     true,
		},
		{
			HxGet:       "/docs/routing/caching",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "Caching",
			Description: "Never have redundant or stale HTML sent to the client.",
			HxBoost:     true,
		},
		{
			HxGet:       "/docs/routing/hx-boost",
			HxTarget:    "main",
			HxPushURL:   true,
			Title:       "hx-boost",
			Description: "hx-boost overide to provide an even better SPA feel.",
			HxBoost:     true,
		},
	}

	links2 := []TLink2Href{
		{
			Title:       "temporary-starter",
			Description: "Temporary is an open-source project and far from production ready. Feel free to contribute!",
			Href:        "",
		},
		{
			Title:       "temporary-website",
			Description: "The code for this current website is public.",
			Href:        "https://github.com/caleb-sideras/temporary-framework-website",
		},
	}

	return HomeTempl(links, links2)
}
