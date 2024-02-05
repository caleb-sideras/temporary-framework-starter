package examples_staticrender

import (
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Example() templ.Component {
	newTempl, err := utils.MdFileToTempl("src/app/examples/_markdown/static_render_example.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}

func Code() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/examples/_markdown/static_render.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}
