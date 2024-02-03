## Folder Hierarchy

```
app
 └─ _slug_
    ├─ page.go
    └─ slug.templ
```
## page.go

```go
func Page(w http.ResponseWriter, r *http.Request) templ.Component {
	vars := mux.Vars(r)
	slug := vars["slug"]

	return Slug(slug)
}
```

## slug.templ

```go
templ Slug(slug string){
 <p>Replace <strong>{ slug }</strong> in your browser URL (and hit enter) to demonstrate Dynamic Routing</p> 
}
```
