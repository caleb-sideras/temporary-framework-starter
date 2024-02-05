package docs_routing_caching

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/caching.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
