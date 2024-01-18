package musicgpt

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Readme() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/projects/_markdown/musicgpt.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}

func Videos() templ.Component {
	tLinkList := []utils.TLinkContent{
		{
			Title:       "MusicGPT V1.1 - Code Interpreter, Custom Visualizations etc",
			Description: "The previous version of MusicGPT could only perform visualizations based on pre-coded components, limiting its capabilities. The new implementation of MusicGPT, which allows it to write and display its own code, source data for the code, and execute the code. However, I acknowledge that this new implementation may have security vulnerabilities. The previous architecture of MusicGPT was circular, with data being passed from one module to the next without it being able to reference the previous module. To solve this issue, I created a new layer in between GPT and the chatbot UI called the parser, which can determine what to do with the data received. The parser can perform various actions, such as accessing the data store and performing arbitrary code execution, making this implementation scalable.",
			Src:         "https://img.youtube.com/vi/h95Pd2rcXvA/hqdefault.jpg",
			Alt:         "MusicGPT Image",
			Href:        "https://www.youtube.com/watch?v=h95Pd2rcXvA",
		},
		{
			Title:       "MusicGPT Devlog - App Router, ai/react etc",
			Description: "I successfully migrated MusicGPT to the next 13.4 stable app router, but found some issues and complexities that may be useful for others planning to migrate. The first issue is with the slow development server and build times, which require developers to batch their changes and work on new things while the server is re-rendering. The second issue is with naming conventions, where the name of the route is now correlated to the name of the folder structure, making it necessary to change how files are interacted with and searched for. This can be confusing when multiple leaves have the same name. Despite these issues, I believe that the app router will improve over time, with the focus being on reliability and speed.",
			Src:         "https://img.youtube.com/vi/52ZnigZ_G4g/hqdefault.jpg",
			Alt:         "MusicGPT Image",
			Href:        "https://www.youtube.com/watch?v=52ZnigZ_G4g",
		},
		{
			Title:       "How I made MusicGPT (rant)",
			Description: "The problem with large language models is that they were trained on text tokens and cannot listen to raw audio, so the purpose of using MusicGPT is to translate a song into something that is digestible by the model. I will explain a demo of the concept and dedicated analysis, which is necessary due to the large amount of tokens in the data. I do various things to minimize the tokens of data, such as removing unnecessary characters and shortening keys that are repetitive. MusicGPT provides some visualizations, and one of the main feature extractions is MIDI. However, depending on the GPT4 state and how it interprets the system prompt, it can provide wildly different answers with the same system prompt. The author also mentions that an interpreter on the client can be used to bypass all of this.",
			Src:         "https://img.youtube.com/vi/kVaLo40P9Xc/hqdefault.jpg",
			Alt:         "MusicGPT Image",
			Href:        "https://www.youtube.com/watch?v=kVaLo40P9Xc",
		},
	}
	return server.GridVideos(tLinkList)
}
