package caas

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Readme() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/projects/_markdown/caas.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}

func Videos() templ.Component {
	tLinkList := []utils.TLinkContent{
		{
			Title:       "A deep dive into CAAS",
			Description: "Introducing CAAS, the clustering audio adaptive segmentation algorithm for MusicGPT. The problem with extracting features from music is the size of the data; CAAS addresses this issue by clustering like segments together so that only one relevant segment is fed to MusicGPT. This reduces the data from 20,000 tokens to around 5,000 tokens, resulting in a significant performance boost. My initial idea was to do a one-pass segmentation, but over the course of video I reveal why that approach was naive",
			Src:         "https://img.youtube.com/vi/5Cp4Hsy1cpI/hqdefault.jpg",
			Alt:         "CAAS Image",
			Href:        "https://www.youtube.com/watch?v=5Cp4Hsy1cpI",
		},
	}
	return server.GridVideos(tLinkList)
}
