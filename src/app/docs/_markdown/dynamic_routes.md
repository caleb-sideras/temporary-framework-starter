# Dynamic Routes

When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time.

## Convention

A Dynamic Segment can be created by wrapping a folder's name in underscores: `_folderName_`. For example, `_id_` or `_slug_`.

Dynamic Segments are passed as the params and be accesed via the `*http.Request` object using your assigned folder name.


## Example

For example, a blog could include the following route `app/blog/_slug_/page.go` where `_slug_` is the Dynamic Segment for blog posts.

```go
package slug_test

import (
	"net/http"
	"github.com/a-h/templ"
	"github.com/gorilla/mux"
)

func Page(w http.ResponseWriter, r *http.Request) templ.Component {
  vars := mux.Vars(r)
  slug := vars["slug"]

  return slugTempl(slug)
}

templ slugTempl(slug string){
  <div>My Post: { slug }</div>
}

```

- `app/blog/_id_/page.go`	  → `/blog/a`	→ `{ id: 'a' }`
- `app/blog/_uuid_/page.go`	→ `/blog/b`	→ `{ uuid: 'b' }`
- `app/blog/_tag_/page.go`	→ `/blog/c`	→ `{ tag: 'c' }`
