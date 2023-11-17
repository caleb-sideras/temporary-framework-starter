package gox

import (
	"github.com/a-h/templ"
	"github.com/caleb-sideras/gox2/gox/data"
)

type GoxDir struct {
	FileType string
	FilePath string
}

type Gox struct {
	OutputDir string
}

type RequestType int64
type HandleType int64

type FnType struct {
	Recv   string   // Receiver type
	Rtn    string   // Return type
	Params []string // Param types
}

type HttpParams struct {
	Res bool
	Req bool
}

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

type RenderCustomFunc func() error
type RenderCustom struct {
	Handler RenderCustomFunc
}
type RenderDefaultFunc func() templ.Component
type RenderDefault struct {
	Path    string
	Handler RenderDefaultFunc
}
