# Page Templ

In Temporary, pages are designed to return a `templ.Component` interface from the `github.com/a-h/templ` package. This interface simply enforces the `Render` function, as demonstrated below:. 

```go
// Component is the interface that all templates implement.
type Component interface {
	// Render the template.
	Render(ctx context.Context, w io.Writer) error
}

// ComponentFunc converts a function that matches the Component interface's
// Render method into a Component.
type ComponentFunc func(ctx context.Context, w io.Writer) error

// Render the template.
func (cf ComponentFunc) Render(ctx context.Context, w io.Writer) error {
	return cf(ctx, w)
}

```

## Separate Templ file

The easiest way to satisfy this the `templ.Component` interface is to first define your Templ logic in a separate file. Then use the Temporary `bun run build` cli command. This invokes the `templ generate` command, which converts your Templ logic into Go functions - satifying this interface.

### Example

Structure your application directory as follows:

```
app                  (1)
 ├─ hello_world.templ       
 ├─ hello_world_templ.go          
 └─ page.go          
```

Define your Templ logic in a `.templ` file:

```go
// hello_world.templ       

templ HelloWorld(){
	<h1>Hello World!</h1>
} 
```

The `templ generate` command will convert the above Templ into a Go function:

```go
// hello_world_templ.go

func HelloWorld() templ.Component {
	return templ.ComponentFunc(func(ctx context.Context, templ_7745c5c3_W io.Writer) (templ_7745c5c3_Err error) {
		templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templ_7745c5c3_W.(*bytes.Buffer)
    ...
		return templ_7745c5c3_Err
	})
}
  
```

This `HelloWorld` function can subsequently be used within your pages:

```go
// page.go       

package home

import (
	"github.com/a-h/templ"
)

func Page() templ.Component {
	return HelloWorld()
}
```

## In-line Templ

Alternatively, if you're feeling like suffering, you can attempt to define your own Go, Templ logic inside of your pages.

```go
// page.go

package home

import (
	"github.com/a-h/templ"
)

func Page() templ.Component {
  return templ.ComponentFunc(func(ctx context.Context, templ_7745c5c3_W io.Writer) (templ_7745c5c3_Err error) {
  		templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templ_7745c5c3_W.(*bytes.Buffer)
      ...
  		return templ_7745c5c3_Err
  	})  
}
```


