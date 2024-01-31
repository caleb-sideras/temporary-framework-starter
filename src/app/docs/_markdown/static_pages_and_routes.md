# Static Pages and Routes   

By __default__, Temporary treats all routes defined in `pages.go` and `route.go` as dynamic. This approach ensures that your functions are executed with each request, allowing all operations (like data fetching and mutations) to occur in real-time, thereby guaranteeing the most current data.

The following example illustrates a typical dynamic route scenario:


```go
package home

import (
	"net/http"
	"github.com/a-h/templ"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {
	someData := fetchNames()

	return NamesList(someData)
}

templ NamesList(names []string){
  <ul>
		for _, n := range names {
			<li>
				{ n }
			</li>
		}
	</ul>
  }  
```

## Static

However, not all routes require real-time data processing. Some serve consistent HTML content, where executing extensive build processes for each request can hamper performance. For these scenarios, Temporary offers a build-time rendering feature. By simply appending an underscore `_` to your function names in both `page.go` and `route.go`, you can render these routes at build-time. This not only generates the full HTML pages but also prepares the partial content necessary for Temporary's `hx-boost` override, optimizing performance for static content.

Below is an example of a route with an extensive build process, such as converting markdown to a Templ component. This route is used for the page you are currently viewing.

```go
package docs_routing_staticpagesandroutes

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/src/utils"
)

func Page_() templ.Component {

	newTempl, err := utils.MdFileToTempl("src/app/docs/_markdown/static_pages_and_routes.md")

	if err != nil {
		panic(err)
	}

	return newTempl
}
  
```
