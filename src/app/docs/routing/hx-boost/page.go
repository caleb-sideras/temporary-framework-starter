package docs_routing_hxboost

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/hx_boost.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
