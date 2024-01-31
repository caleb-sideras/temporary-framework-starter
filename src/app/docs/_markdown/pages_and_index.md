# Pages and Indexs

The App Router inside Temporary has file conventions to easily create pages and shared indexs. This page will guide you through how to use these special files in your Temporary application.

## Pages

A page is UI that is unique to a route. You can define pages by exporting a component from a `page.go` file. Use nested folders to define a route and a `page.go` file to make the route publicly accessible.

Create your first page by adding a `page.go` file inside the app directory:


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

func Page(w http.ResponseWriter, r *http.Request) templ.Component {
	return HelloHome()
}

templ HelloWorld(){
  <h1>Hello, Home Page!</h1>
}
  
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
	return HelloExample()
}

templ HelloWorld(){
  <h1>Hello, Example!</h1>
}
  
```

### Good to know:

- A page is always the leaf of the route subtree.
- `.go` file extension can be used for Pages.
- A `page.go` file is required to make a route segment publicly accessible.
- Pages are Dynamic Server Components by default.
- Pages can fetch data. 
- Pages must return `templ.Component`.



## Indexs

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
