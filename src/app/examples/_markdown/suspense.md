## Folder Hierarchy

```
app
 └─ todo
    ├─ page.go
    └─ suspense.templ
```

## page.go

```go
func Page() templ.Component {
	return Suspense()
}
```

## suspense.templ

```go
templ Suspense() {
	@temporary.Suspense(spinner()) {
		@randomNumber()
	}
}

func randomNumber() templ.Component {

	randomNumber := rand.Intn(101)
	time.Sleep(3 * time.Second)

	return randomNumberTempl(randomNumber)
}

templ randomNumberTempl(number int) {
	<h1>{ number }</h1>
}

templ spinner() {
	<md-circular-progress indeterminate role="presentation" value="0.75"></md-circular-progress>
}
```
