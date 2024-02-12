package docs_installation

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/installation.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
