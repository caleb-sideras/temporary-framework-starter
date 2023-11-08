package home

import (
	// "log"
	"bytes"
	"context"
	"fmt"
	"io"
	"log"
	"net/http"
	// "time"

	"github.com/a-h/templ"
	xcontent "github.com/caleb-sideras/gox2/src/xcontent"
	"github.com/google/uuid"
)

type Temp struct {
	Res http.ResponseWriter
	Req *http.Request
	// will add other cool stuff
}

// Server Component

// w http.ResponseWriter, r *http.Request
func (t Temp) HomePage() templ.Component {
	// perform server-side logic
	// fetch data, mutations, etc

	return t.Home(VarHomeCards, VarHomeSections)
}

func renderTest(childCmp templ.Component) templ.Component {

	return templ.ComponentFunc(func(ctx context.Context, w io.Writer) (w_Err error) {
		// w_Buffer, w_IsBuffer := w.(*bytes.Buffer)

		// if !w_IsBuffer {
		// 	w_Buffer = templ.GetBuffer()
		// 	defer templ.ReleaseBuffer(w_Buffer)
		// }

		var w_Buffer bytes.Buffer

		// ctx = templ.InitializeContext(ctx)
		// childCmp := templ.GetChildren(ctx)
		// if childCmp == nil {
		// 	log.Println("NO CHILDREN")
		// 	childCmp = templ.NopComponent
		// } else {
		// 	var bytes bytes.Buffer
		// 	log.Println("CHILD!!:", childCmp)
		// 	err := childCmp.Render(ctx, &bytes)
		// 	if err != nil {
		// 		panic(err)
		// 	}
		// 	log.Println("HTML!!!:", bytes.String())
		// }
		ctx = templ.ClearChildren(ctx)

		cmp := childCmp.Render(ctx, &w_Buffer)
		if cmp != nil {
			panic(cmp)
		}

		// if !w_IsBuffer {
		_, w_Err = w_Buffer.WriteTo(w)
		// }
		return w_Err
	})
}

func renderSuspense() templ.Component {

	return templ.ComponentFunc(func(ctx context.Context, w io.Writer) (w_Err error) {
		w_Buffer, w_IsBuffer := w.(*bytes.Buffer)

		if !w_IsBuffer {
			w_Buffer = templ.GetBuffer()
			defer templ.ReleaseBuffer(w_Buffer)
		}

		ctx = templ.InitializeContext(ctx)
		childCmp := templ.GetChildren(ctx)
		if childCmp == nil {
			childCmp = templ.NopComponent
		}
		ctx = templ.ClearChildren(ctx)

		cmp := childCmp.Render(ctx, w_Buffer)
		if cmp != nil {
			panic(cmp)
		}

		if !w_IsBuffer {
			_, w_Err = w_Buffer.WriteTo(w)
		}
		return w_Err
	})
}

func (t Temp) Suspense() templ.Component {

	throwawayURL := fmt.Sprintf("/%s", uuid.New().String())

	return templ.ComponentFunc(func(ctx context.Context, w io.Writer) (w_Err error) {
		// log.Println(w.(*bytes.Buffer))
		// w_Buffer, w_IsBuffer := w.(*bytes.Buffer)
		// log.Println(w_Buffer)

		// if !w_IsBuffer {
		// 	log.Println("GET BUFFER")
		// 	w_Buffer = templ.GetBuffer()
		// 	defer templ.ReleaseBuffer(w_Buffer)
		// }

		// copyBuf := bytes.NewBuffer(w_Buffer.Bytes())

		ctx, _ = context.WithCancel(ctx)
		dctx := &xcontent.LifelineContext{ctx}

		childCmp := templ.GetChildren(dctx)
		if childCmp == nil {
			childCmp = templ.NopComponent
		}

		log.Printf("%p", dctx.Ctx)
		log.Printf("%p", ctx)

		http.HandleFunc(throwawayURL, func(res http.ResponseWriter, req *http.Request) {

			log.Println("--ENDPOINT:", throwawayURL)

			// err := dctx.Err()
			// fmt.Print("D Context:")
			// if err != nil {
			// 	if err == context.DeadlineExceeded {
			// 		fmt.Print("deadline exceeded\n")
			// 	} else if err == context.Canceled {
			// 		fmt.Print("canceled\n")
			// 	} else {
			// 		fmt.Print("An error occurred:", err)
			// 	}
			// } else {
			// 	fmt.Print("is good!\n")
			// }

			// var buf bytes.Buffer
			// err = renderSuspense().Render(dctx, &buf)
			// if err != nil {
			// 	panic(err)
			// }
			// log.Println("BYTES:", buf.String())

			err := renderTest(childCmp).Render(dctx, res)

			// err := Card(HomeCard{"Hello", "world", "LINK"}).Render(dctx, res)
			if err != nil {
				panic(err)
			}

			// name := "Caleb Sideras"
			// w_Buffer.Write([]byte(name))

			// log.Println("BUFFER:", copyBuf.String())

			// res.WriteHeader(http.StatusOK)
			// _, err = res.Write(copyBuf.Bytes())
			// if err != nil {
			// 	log.Fatal(err)
			// }

			err = dctx.Err()
			fmt.Print("Pre Context:")
			if err != nil {
				if err == context.DeadlineExceeded {
					fmt.Print("deadline exceeded\n")
				} else if err == context.Canceled {
					fmt.Print("canceled\n")
				} else {
					fmt.Print("An error occurred:", err)
				}
			} else {
				fmt.Print("is good!\n")
			}

			dctx.Done()

			err = dctx.Err()
			fmt.Print("Post Context:")
			if err != nil {
				if err == context.DeadlineExceeded {
					fmt.Print("deadline exceeded\n")
				} else if err == context.Canceled {
					fmt.Print("canceled\n")
				} else {
					fmt.Print("An error occurred:", err)
				}
			} else {
				fmt.Print("is good!\n")
			}
		})

		log.Println("--SUSPENSE:", throwawayURL)
		err := ctx.Err()
		fmt.Print("Original Context:")
		if err != nil {
			if err == context.DeadlineExceeded {
				fmt.Print("deadline exceeded\n")
			} else if err == context.Canceled {
				fmt.Print("canceled\n")
			} else {
				fmt.Print("An error occurred:", err)
			}
		} else {
			fmt.Print("is good!\n")
		}

		return StreamComponent(throwawayURL).Render(ctx, w)
		// var buf bytes.Buffer
		// renderTest().Render(ctx, &buf)
		// log.Println("HELLO MOTHER", buf.String())
		// return renderTest().Render(ctx, w)
	})
}

// Streaming in components is possible with hx-get="url" and hx-trigger="load"

// @Suspense(){
//	@t.Test()
//  ^^ has access to request object and can fetch data
// }

// this patern is crazy... damn
func (t Temp) Test(card HomeCard) templ.Component {
	// can do whatever logic we want to the data beore we render the component
	// log.Println("THIS IS THE REQ", t.Req)
	card.Description = "MILKERSSS!"

	// time.Sleep(5 * time.Second)
	return Card(card)
}

// if no return type, temporary will simply call your function
// func Page(w http.ResponseWriter, r *http.Request) {
// 	return Home(VarHomeCards, VarHomeSections)
// }
