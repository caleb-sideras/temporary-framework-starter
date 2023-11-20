package gox

import (
	"github.com/a-h/templ"
)

type HandleType int64

const (
	DefaultHandler HandleType = iota // no params
	ResReqHandler                    // Response and Request
)

type Handler struct {
	Path    string
	Handler interface{}
	HandleType
}
type RenderDefault struct {
	Path    string
	Handler func() templ.Component
}

type IndexDefaultFunc func() templ.Component
