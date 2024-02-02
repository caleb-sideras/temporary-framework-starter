package examples_todo

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/components/server"
	"github.com/caleb-sideras/gox2/src/utils"
	"net/http"
)

func Example() templ.Component {
	return server.Todo()
}

func AddTask(w http.ResponseWriter, r *http.Request) templ.Component {
	task := r.PostFormValue("task")
	return server.Task(task)
}

func Code() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/examples/_markdown/todo.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}
