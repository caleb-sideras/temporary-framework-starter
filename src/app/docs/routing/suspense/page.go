package docs_routing_suspense

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/suspense.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
