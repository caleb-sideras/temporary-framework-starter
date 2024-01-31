package docs_routing_suspense

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Page() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/suspense.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
