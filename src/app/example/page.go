package example

import (
	"net/http"

	"github.com/a-h/templ"
	home "github.com/caleb-sideras/gox2/src/app/home_"
	components "github.com/caleb-sideras/gox2/src/app/home_/components"
	// "github.com/caleb-sideras/gox2/temporary"
)

//	type Temporary struct {
//		Res http.ResponseWriter
//		Req *http.Request
//	}
// type temp struct {
// 	*temporary.Temporary
// }

// Server Component
func Page(w http.ResponseWriter, r *http.Request) templ.Component {
	// perform server-side logic -> fetch data, mutations, etc

	return components.HomeTempl(home.VarHomeCards, home.VarHomeSections)
}
