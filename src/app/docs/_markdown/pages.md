# Pages

A page is UI that is unique to a route. You can define pages by exporting a component from a page.go file. Use nested folders to define a route and a page.go file to make the route publicly accessible.

Create your first page by adding a page.go file inside the app directory:

```
app                  (1)
 ├─ index.go       
 └─ example          (2)
    └─ page.go  
```

```go
// `app/example/page.go` is the UI for the `/example` URL

package home

import (
	"net/http"
	"github.com/a-h/templ"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {
  // Perform some data fetching/mutations
	return HelloWorld()
}

templ HelloWorld(){
  <h1>Hello, Example!</h1>
}
    
```

By default, Temporary treats all routes defined in `pages.go` as dynamic. This approach ensures that your functions are executed with each request, allowing all operations (like data fetching and mutations) to occur in real-time, thereby guaranteeing the most current data.

Page functions are not required to have the `w http.ResponseWriter, r *http.Request` parameters. You may omit them if they are not used.
