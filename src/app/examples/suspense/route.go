package examples_suspense

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
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
