## Folder Hierarchy

```
app
 └─ todo
    ├─ page.go
    ├─ route.go
    └─ todo.templ
```

## page.go

```go
func Page() templ.Component {
	return Todo()
}
```
## route.go

```go
func AddTask(w http.ResponseWriter, r *http.Request) templ.Component {
	task := r.PostFormValue("task")
	return Task(task)
}
```

## todo.templ

```go
templ Todo() {
	<div id="example-body">
		<form hx-post="/examples/todo/addtask" hx-target="#task-list" hx-swap="beforeend" hx-indicator="#spinner" >
			<md-outlined-text-field label="Add a new task" type="text" name="task" role="presentation" inputmode="" autocomplete="">
				<md-circular-progress slot="trailing-icon" indeterminate="" id="spinner" role="presentation" aria-hidden="true"></md-circular-progress>
			</md-outlined-text-field>
			<md-filled-button type="submit" role="presentation">
				<md-icon>
					<span>
						add
					</span>
				</md-icon>
			</md-filled-button>
		</form>
		<div id="task-list"></div>
	</div>
}

templ Task(task string) {
	<div>
		<span>{ task }</span>
		<md-checkbox></md-checkbox>
	</div>
}
```
