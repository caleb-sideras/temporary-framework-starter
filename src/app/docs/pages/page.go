package docs_pages

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/pages.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
