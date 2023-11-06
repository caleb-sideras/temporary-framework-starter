package main

import (
	"fmt"
	"github.com/a-h/templ"
	index "github.com/caleb-sideras/gox2/src/app"
	// "context"
	home "github.com/caleb-sideras/gox2/src/app/home"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		t := home.Temp{
			Req: req,
			Res: res,
		}

		homePage := t.HomePage()

		// ctx := context.WithValue(context.Background(), "request", req)
		// ctx = context.WithValue(ctx, "response", res)
		// ctx = templ.InitializeContext(ctx)

		// req := ctx.Value("request")
		// req, ok := ctx.Value("request").(*http.Request)
		// if !ok {
		// panic("request not found in context")
		// }

		err := index.Index().Render(templ.WithChildren(req.Context(), homePage), res)

		if err != nil {
			panic(err)
		}
	})

	fmt.Println("Listening on :3000")
	http.ListenAndServe(":3000", nil)
}
