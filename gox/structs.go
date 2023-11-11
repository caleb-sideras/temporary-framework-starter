package gox

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/gox/data"
)

type IndexDefaultFunc func() templ.Component

type PageData struct {
	Data  data.Page
	Index string
	Page  string
}

type DataRender struct {
	Data  data.PageFunc
	Index string
	Page  string
}

type HandlerDefaultFunc func(http.ResponseWriter, *http.Request)
type HandlerDefault struct {
	Path    string
	Handler HandlerDefaultFunc
}

type RenderCustomFunc func() error
type RenderCustom struct {
	Handler RenderCustomFunc
}

type RenderDefault struct {
	Path    string
	Handler interface{}
}
