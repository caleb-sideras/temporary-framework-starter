package docs_routing_staticpagesandroutes

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/static_pages_and_routes.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
