# Defining Routes

This page will guide you through how to define and organize routes in your Temporary application.


## Creating Routes

Temporary uses a file-system based router where folders are used to define routes.

Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.

`page.go`, `route.go`, `handle.go` files are used to make route segments publicly accessible.


```
app                  (1)
 ├─ index.go       
 └─ home             (2)
    ├─ page.go
    ├─ route.go
    └─ about         (3)
```


In this example, the `/home/about` URL path is not publicly accessible because it does not have a corresponding routing file. This folder could be used to store components, stylesheets, images, or other colocated files. Opposed to the `/home` URL path MAY be accessible if there is properly defined UI.


## Creating UI

Special file conventions are used to create UI for each route segment. The most common are pages to show UI unique to a route, and layouts to show UI that is shared across multiple routes.

For example, to create your first page, add a `page.go` file inside the app directory and export a Templ component named `Page`:

```go

package home

import (
	"net/http"
	"github.com/a-h/templ"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {
	return HelloWorld()
}

templ HelloWorld(){
  <h1>Hello, Temporary!</h1>
}
  
```

Additionally, you can use a `route.go` to create UI unique to each route. The names of the exported functions defined in this file will resolve to the URL. 

For example, add a `route.go` file inside the app directory and export a Templ component with the name you wish your URL to have:

```go

package home

import (
	"net/http"
	"github.com/a-h/templ"
)

func HelloWorld(w http.ResponseWriter, r *http.Request) templ.Component {
	return exampleComponent()
}

func Hello(w http.ResponseWriter, r *http.Request) templ.Component {
	return exampleComponent()
}

templ exampleComponent(){
  <h1>Hello, This is an example!</h1>
}
  
```

These resolve to:

1. __home/hello-world__ ← `func HelloWorld()`

2. __home/hello__ ← `func Hello()`


### Good to know:

- Camel case function names are converted to Hyphen-separated case URLs. 
- Routes are Dynamic Server Components by default.
- Routes can fetch data. 
- Routes should return a `Templ.component`.
- Routes are NOT parsed with Indexs.
 
