# Indexs

A index is UI that is shared between multiple pages. On navigation, indexs by __default__ do not preserve state and re-render. Indexs can also be nested.

You can define an index by exporting a `Templ` component from a `index.go` file. The `Templ` component should have a `{children...}` expression that is passed into it for it wrap - which will be populated with a child page during rendering.

```
app                  (1)
 ├─ index.go       
 ├─ page.go       
 └─ example          (2)
    └─ page.go
```

```go
// `app/page.go` is the UI for the `/` URL

package home

import (
	"net/http"
	"github.com/a-h/templ"
)

func Index(w http.ResponseWriter, r *http.Request) templ.Component {
	return IndexTempl()
}

templ IndexTempl(){
	<!DOCTYPE html>
	<html lang="en">
      <body>
        /* Include shared UI here e.g. a header or sidebar */
        <main>
          { children... }
        </main>
      </body>
  </html>
}
  
```

By default, Temporary treats all routes defined in `index.go` as dynamic. This approach ensures that your functions are executed with each request, allowing all operations (like data fetching and mutations) to occur in real-time, thereby guaranteeing the most current data.

Index functions are not required to have the `w http.ResponseWriter, r *http.Request` parameters. You may omit them if they are not used.

### Good to know:

- At present Temporary doesn't support nested Indexs. So each Index is a Root Index. Indexs must contain html and body tags.
- Any route segment can optionally define its own Index. These Indexs will be shared across all pages in that segment.
- Indexs are Dynamic Server Components by default.
- Indexs can fetch data. 
- Passing data between a parent index and its children is not possible.
- `.go` file extension can be used for index.
- A `index.go` and `page.go` files can be defined in the same folder. The index will wrap the page.
- `index.go` files return a `Templ.component`.
- The returned `Templ` component should have a `{children...}` expression that is passed into it for it wrap.
