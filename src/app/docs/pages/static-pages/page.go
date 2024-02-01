package docs_pages_staticpages

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Page() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/static_pages_and_routes.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
