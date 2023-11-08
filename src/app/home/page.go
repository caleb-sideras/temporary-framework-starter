package home

import (
	"bytes"
	"context"
	"fmt"
	"github.com/a-h/templ"
	"github.com/google/uuid"
	"io"
	"log"
	"net/http"
	"strconv"
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
	if len(skeleton) > 1 {
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
			return StreamComponent(throwawayURL).Render(templ.WithChildren(ctx, LoadingSpinner()), w)
		}
		return StreamComponent(throwawayURL).Render(ctx, w)
	})
}

// Streaming in components is possible with hx-get="url" and hx-trigger="load"

// @Suspense(){
//	@t.Test()
//  ^^ has access to request object and can fetch data
// }

const randomOrgAPIURL = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain"

func fetchRandomNumber() (int, error) {
	resp, err := http.Get(randomOrgAPIURL)
	if err != nil {
		return 0, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, err
	}

	var randomNumber int
	_, err = fmt.Sscanf(string(body), "%d", &randomNumber)
	if err != nil {
		return 0, err
	}

	return randomNumber, nil
}

type Number struct {
	Number int
}

// func (t Temp) Test(card HomeCard) templ.Component {
// 	randomNumber, err := fetchRandomNumber()
// 	if err != nil {
// 		log.Println("Error getting random number:", err)
// 	}
// 	log.Println("TEST2", randomNumber)
// 	card.Description = strconv.FormatInt(int64(randomNumber), 10)

// 	return templ.ComponentFunc(func(ctx context.Context, templ_7745c5c3_W io.Writer) (templ_7745c5c3_Err error) {

// 		Card(card).Render(ctx, templ_7745c5c3_W)
// 		return templ_7745c5c3_Err
// 	})
// }

func Test(card HomeCard) templ.Component {

	randomNumber, err := fetchRandomNumber()
	if err != nil {
		log.Println("Error getting random number:", err)
	}
	card.Title = strconv.FormatInt(int64(randomNumber), 10)

	return Card(card)
}

func Test2() templ.Component {

	randomNumber, err := fetchRandomNumber()
	if err != nil {
		log.Println("Error getting random number:", err)
	}

	return Temporary3(strconv.FormatInt(int64(randomNumber), 10))
}

// if no return type, temporary will simply call your function
// func Page(w http.ResponseWriter, r *http.Request) {
// 	return Home(VarHomeCards, VarHomeSections)
// }
