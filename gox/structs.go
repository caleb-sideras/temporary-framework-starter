package gox

import (
	// "net/http"

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

type Handler struct {
	Path    string
	Handler interface{}
	HandleType
}
type HandleType int64

const (
	DefaultHandler HandleType = iota // no params
	ResReqHandler                    // Response and Request
)

type RenderCustomFunc func() error
type RenderCustom struct {
	Handler RenderCustomFunc
}
type RenderDefaultFunc func() templ.Component
type RenderDefault struct {
	Path    string
	Handler RenderDefaultFunc
}
