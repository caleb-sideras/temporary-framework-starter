package examples_todo

import (
	"net/http"

	"calebsideras.com/temporary/src/components/server"
	"calebsideras.com/temporary/src/utils"
	"github.com/a-h/templ"
)

func Example_() templ.Component {
	return server.Todo()
}

func AddTask(w http.ResponseWriter, r *http.Request) templ.Component {
	task := r.PostFormValue("task")
	return server.Task(task)
}

func Code_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/examples/_markdown/todo.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}
