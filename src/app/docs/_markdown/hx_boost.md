# hx-boost

We recommend reading the [Pages and Indexs]() pages before continuing.

By __default__ all navigation between pages that share the same index do not preserve state and fully re-render. But you can opt-in to preserve state on the client by only rendering the HTML required for navigation to that specific route. 


When navigation occurs using an anchor tag with the __HTMX__ `hx-boost="true"` attribute, Temporary hijacks this preventing full HTML DOM swaps if indexs are shared between pages. Only the necessary HTML (i.e the output from the respective `page.go`) is rendered and sent to the client. An `innerHTML` swap is performed with the `<main>` tag. 

For Example:

```
app                  (1)
 ├─ index.go       
 ├─ page.go       
 └─ example          (2)
    └─ page.go
```

Both `/` and `/example` share the same `index.go`, so navigation between these routes with `hx-boost` will always return the needed HTML partials and thus maintaining state in the index. This is especially useful for when you have heavy client-side logic in your index based on state solely accessible in the browser.


## Overiding

You can overide this `hx-boost` behaviour per request. Simply append an `index` query parameter to your request and specify using a boolean value if you would like the index to be returned. Additionally, this can be used in all `GET` requests for page routing, which have this parameter set to `true` by default.


```
// Returns only the page output from example route

https://example.com/example?index=false
```

### NOTE

- We aim to allow you to disable this is the Temporary config.
- We aim to create a Metadata API to allow you to define metadata in your pages and have this dynamically changed on navigation.
