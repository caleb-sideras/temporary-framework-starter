package docs_introduction

import (
	"log"

	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/introduction.md")

	if err != nil {
		log.Println("MF", err)
		panic(err)
	}

	return newTempl
}
