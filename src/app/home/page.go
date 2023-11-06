package home

import (
	// "log"
	"net/http"

	"github.com/a-h/templ"
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

// Streaming in components is possible with hx-get="url" and hx-trigger="load"

// @Suspense(){
//	@t.Card()
// }

// this patern is crazy... damn
func (t Temp) Test(card HomeCard) templ.Component {
	// can do whatever logic we want to the data beore we render the component
	// log.Println("THIS IS THE REQ", t.Req)
	card.Description = "MILKERSSS!"

	return Card(card)
}

// if no return type, temporary will simply call your function
// func Page(w http.ResponseWriter, r *http.Request) {
// 	return Home(VarHomeCards, VarHomeSections)
// }
