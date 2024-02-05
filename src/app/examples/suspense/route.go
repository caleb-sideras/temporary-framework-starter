package examples_suspense

import (
	"calebsideras.com/temporary/src/components/server"
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Example() templ.Component {
	return server.Suspense()
}

func Code() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/examples/_markdown/suspense.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}
