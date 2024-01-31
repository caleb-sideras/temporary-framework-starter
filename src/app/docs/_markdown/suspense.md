# Suspense

Temporary `Suspense` is similar to [React Suspense](https://react.dev/reference/react/Suspense) and lets you display a fallback until its children have finished loading and rendering. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.


```go
@temporary.Suspense(Loading()) {
	@SomeComponent()
}
```

### Props

- `children`: The actual UI you intend to render. If `children` is wrapped in a Suspense, the Suspense boundary will switch to a rendering fallback.
- `parameter`: An alternate UI to display in place of the actual UI if it has not finished loading. Any valid Templ Component is accepted, though in practice, the parameter is a lightweight placeholder view, such as a loading spinner or skeleton. Suspense will automatically switch to the parameter when children suspends, and back to children when the data is ready.


### Example

Below we are defining how the page will handle the suspense. 

```go
func Page() templ.Component {
	return SuspenseExample()
}

templ SuspenseExample() {
	@temporary.Suspense(Spinner()) {
		@RandomNumber()
	}
}
```

We are defining a `RandomNumber` function that sleeps for 3 seconds and the `Spinner` templ we want to use in the loading state.

```go
func RandomNumber() templ.Component {
	rand.Seed(time.Now().UnixNano())

	rn := rand.Intn(101)
	time.Sleep(3 * time.Second)

	return RandomNumberTempl(rn)
}

templ RandomNumberTempl(number int) {
	<h1>{ number }</h1>
}

templ Spinner(){
	<md-circular-progress></md-circular-progress>
}
```

1. The client will first receive the `<md-circular-progress></md-circular-progress>`
2. Once fetching/rendering is completed with `RandomNumber`, the output (e.g. `<h1>21</h1>`) will be swapped into the dom.


## Under the Hood

This uses the HTMX `hx-get`, `hx-trigger="load"` and `hx-swap="outerHTML"` attributes with a random UUID endpoint assigned at request-time that gets destroyed upon completion of the request.

Here's a glimpse of what the HTMX implementation might look like in HTML:

```html
<div hx-get="UUID" hx-trigger="load" hx-swap="outerHTML" hx-indicator="#spinner">
  <div id="spinner">		
    <md-circular-progress></md-circular-progress>
  </div>
</div>
```
