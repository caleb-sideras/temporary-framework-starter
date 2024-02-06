package docs_routing_pagesandindex

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/pages_and_index.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
