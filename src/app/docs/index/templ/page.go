package docs_index_templ

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/index_templ.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
