package temporary

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"net/http"

	"github.com/a-h/templ"
	"github.com/google/uuid"
)

type Temporary struct {
	Res http.ResponseWriter
	Req *http.Request
}

func renderSuspense(childCmp templ.Component) templ.Component {

	return templ.ComponentFunc(func(ctx context.Context, w io.Writer) (w_Err error) {
		var w_Buffer bytes.Buffer

		ctx = templ.ClearChildren(ctx)

		cmp := childCmp.Render(ctx, &w_Buffer)
		if cmp != nil {
			panic(cmp)
		}

		_, w_Err = w_Buffer.WriteTo(w)
		return w_Err
	})
}

func Suspense(skeleton ...templ.Component) templ.Component {

	throwawayURL := fmt.Sprintf("/%s", uuid.New().String())
	var renderSkeleton templ.Component
	if len(skeleton) > 0 {
		renderSkeleton = skeleton[0]
	}

	return templ.ComponentFunc(func(ctx context.Context, w io.Writer) (w_Err error) {

		childCmp := templ.GetChildren(ctx)
		if childCmp == nil {
			childCmp = templ.NopComponent
		}
		ctx = templ.ClearChildren(ctx)

		http.HandleFunc(throwawayURL, func(res http.ResponseWriter, req *http.Request) {
			err := renderSuspense(childCmp).Render(req.Context(), res)
			if err != nil {
				panic(err)
			}
		})

		if renderSkeleton != nil {
			return StreamComponent(throwawayURL).Render(templ.WithChildren(ctx, renderSkeleton), w)
		}
		return StreamComponent(throwawayURL).Render(ctx, w)
	})
}
