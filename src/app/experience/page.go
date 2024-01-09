package experience

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
)

func Page_() templ.Component {
	experienceList := []server.JobExperience{
		{
			Position: "Remote — Jr Android Developer",
			Company:  "Echelon",
			Date:     "June 2022 - November 2022",
			List: []string{
				"Migration of the Reflect Smart Fitness Mirror's API, Business Logic and Design to modern standards.",
				"Updated the onboarding process for users and sub-accounts",
				"Integration of wireless headphones and heart monitors to workouts through the Bluetooth API.",
				"Android, Java, XML, REST, Jira, Confluence, Slack",
			},
			Description: "During my time at Echelon, I have mainly contributed to the digital transformation efforts on the Reflect Smart Fitness Mirror. I initially facilitated an agile working environment for these efforts by developing an abstraction layer that accommodated both new and old schemas from the company's APIs. Additionally, while fixing old and implementing new functionality, I achieved an application-wide decrease in code duplication by developing a comprehensive implementation redesign for the flow of onboarding tasks - by leveraging the idea of universal fragments. These engineering challenges emphasized the significance in understanding the coupling between existing components, enabling redesigned solutions that work concurrently with live systems.",
		},
		{
			Position: "Remote — Full Stack Developer",
			Company:  "Genera",
			Date:     "October 2021 - May 2022",
			List: []string{
				"Designed, developed and deployed Genera on AWS.",
				"Integrated Vue.js with Django.", 
				"Brought backend functionally to the client using Pyodide, reducing server costs.",
				"Achieved reduced deployment and minting fees by utilizing the ERC-1155 multi-token standard.",
				"Django, Vue, AWS, Stripe, Metamask, IPFS",
			},
			Description: "I spearheaded the development of Genera, a platform that bridged the gap between artists and Web3 infrastructure; enabling them to create thousands of generative NFTs from their textures and assets. Once developed, Genera also offered them the opportunity to deploy them to Ethereum as erc1155 or erc721 tokens with customizable customer facing minting pages. From a technical standpoint, Genera pushed the boundaries of what a traditional Django application could do - integrating a modern framework (Vue.js) paired with a heavy reliance on both client and server side communication with Etheruem to be in sync with our own DB and payments. These difficult engineering challenges instilled in me the belief that value creation is hidden within the unknown. Additionally, deploying this stack to AWS highlighted the importance in having a detailed understanding of various web services and server-side optimizations. This was my first experience in operating within all aspects of the software development lifecycle and has drastically developed my ability to quickly implement new technologies.",
			
		},
	}
	return server.Experience(experienceList)

}
