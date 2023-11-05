package home

var VarHomeCards []HomeCard = []HomeCard{
	{
		Title:       "What is GoX?",
		Description: "Understand what GoX solves",
		Link:        "#what-is-gox",
	},
	{
		Title:       "Using GoX",
		Description: "Learn how to use GoX",
		Link:        "#using-gox",
	},
	{
		Title:       "Additions",
		Description: "Additional technologies to use with GoX",
		Link:        "#additions",
	},
	{
		Title:       "Contribute",
		Description: "Find out how you can contribute to GoX",
		Link:        "#contribute",
	},
}

var VarHomeSections []HomeSection = []HomeSection{
	{
		Title:       "What's GoX?",
		Description: "While Go and HTMX are a joy to work with, there is no established way of using these technologies together in a way that scales; resulting in complexity in your codecase. GoX structures your code and hides this complexity behind certain primitives.",
		Id:          "what-is-gox",
		Section:     1,
		Cards:       cards1,
		ImageVer:    "/static/assets/gox-mascot-vert.png",
		ImageHor:    "/static/assets/gox-mascot-hor.png",
	},
	{
		Title:       "Using GoX",
		Description: "Reading documentation can be difficult, so we have created some examples to illutrate common usecases.",
		Id:          "using-gox",
		Section:     2,
		Cards:       cards2,
		ImageVer:    "bg-audio-ver",
		ImageHor:    "bg-audio-hor",
	},
	{
		Title:       "Additions",
		Description: "Go and HTMX alone are not enough to create a rich user experience. Below are some recommended technologies to add to your toolbox.",
		Id:          "additions",
		Section:     3,
		Cards:       cards3,
		ImageVer:    "bg-audio-ver",
		ImageHor:    "bg-audio-hor",
	},
	{
		Title:       "Contribute",
		Description: "GoX is an open-source project. PRs, Issues, Proposals will all be looked at",
		Id:          "contribute",
		Section:     3,
		Cards:       cards4,
		ImageVer:    "bg-audio-hor",
		ImageHor:    "bg-audio-ver",
	},
}

var cards1 []HomeCard = []HomeCard{
	{
		Title:       "Pages",
		Description: "Pages are a simple way to define and handle route specific UI",
		Link:        "/docs/pages",
	},
	{
		Title:       "Data",
		Description: "Separate data from your HTML powering reusuable components with dynamic data fetching",
		Link:        "/docs/data",
	},
	{
		Title:       "Render",
		Description: "Bespoke rendering processes for routes at build time",
		Link:        "/docs/render",
	},
	{
		Title:       "Handle",
		Description: "Custom handlers for html partials or full pages",
		Link:        "/docs/handle",
	},
}
var cards3 []HomeCard = []HomeCard{
	{
		Title:       "Alpine",
		Description: "Alpine is a rugged, minimal tool for composing behavior directly in your markup.",
		Link:        "https://alpinejs.dev/",
	},
	{
		Title:       "Material 3",
		Description: "Material 3 is the latest version of Google’s open-source design system.",
		Link:        "https://m3.material.io/",
	},
	{
		Title:       "Tailwind",
		Description: "A utility-first CSS framework directly in your markup.",
		Link:        "https://tailwindcss.com/",
	},
}

var cards2 []HomeCard = []HomeCard{
	{
		Title:       "Todo",
		Description: "Shows you how to return static and dynamic HTML",
		Link:        "/examples/todo",
	},
	{
		Title:       "Data Fetching",
		Description: "Per-request data fetching for your pages",
		Link:        "/examples/data",
	},
	{
		Title:       "Custom Rendering",
		Description: "Have a build step for your HTML",
		Link:        "/examples/render",
	},
	{
		Title:       "Pages",
		Description: "Custom Rendering",
		Link:        "/examples/pages",
	},
}

var cards4 []HomeCard = []HomeCard{
	{
		Title:       "gox-starter",
		Description: "GoX is an open-source project and far from production ready. Feel free to contribute!",
		Link:        "https://github.com/caleb-sideras/gox-starter",
	},
	{
		Title:       "gox-website",
		Description: "The code for this current website is public",
		Link:        "https://github.com/caleb-sideras/gox-website",
	},
	{
		Title:       "Me",
		Description: "HMU on twitter",
		Link:        "https://twitter.com/sliderass",
	},
}
