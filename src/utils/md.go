package utils

import (
	"bytes"
	"context"
	"io"
	"os"

	"github.com/a-h/templ"
	"github.com/yuin/goldmark"
	"github.com/yuin/goldmark/parser"
	"github.com/yuin/goldmark/renderer/html"
)

func bufferToTempl(buf bytes.Buffer) templ.Component {
	return templ.ComponentFunc(func(ctx context.Context, templ_7745c5c3_W io.Writer) (templ_7745c5c3_Err error) {
		templ_7745c5c3_Buffer, templ_7745c5c3_IsBuffer := templ_7745c5c3_W.(*bytes.Buffer)
		if !templ_7745c5c3_IsBuffer {
			templ_7745c5c3_Buffer = templ.GetBuffer()
			defer templ.ReleaseBuffer(templ_7745c5c3_Buffer)
		}
		ctx = templ.InitializeContext(ctx)
		// templ_7745c5c3_Var1 := templ.GetChildren(ctx)
		// if templ_7745c5c3_Var1 == nil {
		// 	templ_7745c5c3_Var1 = templ.NopComponent
		// }
		// ctx = templ.ClearChildren(ctx)
		// _, templ_7745c5c3_Err = templ_7745c5c3_Buffer.Write(buf.Bytes())
		_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteString("<div id='markdown'>" + buf.String() + "</div>")
		if templ_7745c5c3_Err != nil {
			return templ_7745c5c3_Err
		}
		if !templ_7745c5c3_IsBuffer {
			_, templ_7745c5c3_Err = templ_7745c5c3_Buffer.WriteTo(templ_7745c5c3_W)
		}
		return templ_7745c5c3_Err
	})
}

func MdObjToTempl(markdown []byte) (templ.Component, error) {
	var buf bytes.Buffer
	md := goldmark.New(
		goldmark.WithRendererOptions(
			html.WithXHTML(),
			html.WithUnsafe(),
		),
		goldmark.WithParserOptions(
			parser.WithAutoHeadingID(),
			parser.WithAttribute(),
		),
	)

	if err := md.Convert(markdown, &buf); err != nil {
		return nil, err
	}

	newTempl := bufferToTempl(buf)

	return newTempl, nil
}

func MdFileToTempl(path string) (templ.Component, error) {
	_, err := os.Getwd()
	if err != nil {
		return nil, err
	}
	markdown, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}

	newTempl, err := MdObjToTempl(markdown)
	if err != nil {
		return nil, err
	}
	return newTempl, nil
}
