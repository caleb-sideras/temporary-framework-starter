## Folder Hierarchy

```
app
 └─ example
    ├─ page.go
    └─ static.md
```
## page.go

```go
func Page_() templ.Component {
	newTempl, err := utils.MdFileToTempl("path/static.md")
	if err != nil {
		panic(err)
	}

	return newTempl
}
```
## static.md

```markdown
## This is Markdown!

Why this is __cool__

1. Rendered at build

2. Serving static

3. Really easy primitive
```
