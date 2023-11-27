package temp

import (
	"github.com/a-h/templ"
)

// Server Component
func Index() templ.Component {
	// perform server-side logic -> fetch data, mutations, etc

	return IndexTempl()
}
