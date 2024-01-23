package test

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Example_() templ.Component {

	tLinkList := []utils.TLinkContent{
		{
			Title:       "TESTING DA SLUUUG",
			Description: "SLUGGERMAN",
			Src:         "https://img.youtube.com/vi/_gDwxfE5KKU/hqdefault.jpg",
			Alt:         "GoX Image",
			Href:        "https://www.youtube.com/watch?v=_gDwxfE5KKU",
		},
	}
	// slug := mux.Vars(r)["test"]
	return server.GridVideos(tLinkList)
}

func Example2() templ.Component {

	tLinkList := []utils.TLinkContent{
		{
			Title:       "TESTING DA SLUUUG",
			Description: "SLUGGERMAN",
			Src:         "https://img.youtube.com/vi/_gDwxfE5KKU/hqdefault.jpg",
			Alt:         "GoX Image",
			Href:        "https://www.youtube.com/watch?v=_gDwxfE5KKU",
		},
	}
	// slug := mux.Vars(r)["test"]
	return server.GridVideos(tLinkList)
}
