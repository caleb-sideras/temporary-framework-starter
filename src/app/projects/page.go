package projects

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {

	tLinkList := []utils.TLinkContent{
		{
			Title:       "MusicGPT",
			Description: "Multimodal AI that generates custom visualizations and facilitates natural language dialogue about technical aspects of a song - spanning from its musical structure to its production features.",
			Src:         "https://music-gpt.xyz/musicgpt.png",
			Alt:         "MusicGPT Image",
			Href:        "/projects/musicgpt",
			Boost:       "true",
		},
		{
			Title:       "GoX Framework",
			Description: "A framework designed to make working with Go and HTMX easier. Achieves this by employing certain primitives that tightly couple them, aiding scaling.",
			Src:         "https://gox-framework.org/static/assets/gox-mascot-hor.png",
			Alt:         "GoX Framework Moscot",
		},
		{
			Title:       "CAAS",
			Description: "CAAS is an audio segmentation algorithm that iteratively finds the best intervals and patterns in a given audio signal, clusters them based on similarity and then extracts relevant audio features (Lyrics, MIDI etc).",
			Src:         "https://opengraph.githubassets.com/1a43d7c7f54d054a1094b6f53a76668f5d192eafd3f041c978cce36355cf3006/caleb-sideras/CAAS",
			Alt:         "CAAS Github",
		},
		{
			Title:       "People Pedia",
			Description: "AI powered search that summarizes and visualizes information for anyone who has data on the internet.",
			Src:         "https://opengraph.githubassets.com/be1d1b6657697642586856c35f9916242a1108d34d8cee509b61c2ca5b5e2e56/caleb-sideras/PeoplePedia-Backend",
			Alt:         "People Pedia Github",
		},
		{
			Title:       "Tweetailyze",
			Description: "A web app that performs Twitter account summarization through tweet embedding, clustering, sentiment analysis and topic modeling.",
			Src:         "https://opengraph.githubassets.com/bc52bfa035af32496e45f674130251555d2549ca38d8b333461df836979cebbb/caleb-sideras/tweetailyze-frontend",
			Alt:         "Tweetailyze Github",
		},
	}

	return server.Grid(tLinkList)

}
