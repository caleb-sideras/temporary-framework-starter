package docs_index_templ

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Page() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/index_templ.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
