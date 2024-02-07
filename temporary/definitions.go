
// Code generated by Temporary; DO NOT EDIT.
package temporary
import (
	"calebsideras.com/temporary/src/app/docs/index/templ"
	"calebsideras.com/temporary/src/app/docs/pages"
	"calebsideras.com/temporary/src/app/docs/pages/templ"
	"calebsideras.com/temporary/src/app/docs/project-structure"
	"calebsideras.com/temporary/src/app/docs/routing/static-pages-and-routes"
	"calebsideras.com/temporary/src/app/blog/temporarystandard"
	"calebsideras.com/temporary/src/app/examples/_slug_/dynamic-routes"
	"calebsideras.com/temporary/src/app/examples/static-render"
	"calebsideras.com/temporary/src/app/home_"
	"calebsideras.com/temporary/src/app"
	"calebsideras.com/temporary/src/app/blog"
	"calebsideras.com/temporary/src/app/examples/todo"
	"calebsideras.com/temporary/src/app/docs/routing/dynamic-routes"
	"calebsideras.com/temporary/src/app/docs/routing/hx-boost"
	"calebsideras.com/temporary/src/app/examples/suspense"
	"calebsideras.com/temporary/src/app/docs/pages/static-pages"
	"calebsideras.com/temporary/src/app/docs/routing"
	"calebsideras.com/temporary/src/app/docs/routing/defining-routes"
	"calebsideras.com/temporary/src/app/docs/index"
	"calebsideras.com/temporary/src/app/docs/routing/suspense"
	"calebsideras.com/temporary/src/app/docs/introduction_"
	"calebsideras.com/temporary/src/app/docs/routing/pages-and-index"
	"calebsideras.com/temporary/src/app/docs/routing/caching"
)

var IndexList = map[string]IndexDefaultFunc{
	"/docs/pages" : app.Index,
	"/docs/routing/static-pages-and-routes" : app.Index,
	"/blog/temporarystandard" : app.Index,
	"/" : app.Index,
	"/docs" : app.Index,
	"/examples/suspense" : app.Index,
	"/docs/pages/static-pages" : app.Index,
	"/examples/{slug}" : app.Index,
	"/docs/routing/defining-routes" : app.Index,
	"/examples/{slug}/dynamic-routes" : app.Index,
	"/docs/index/templ" : app.Index,
	"/docs/routing" : app.Index,
	"/docs/routing/dynamic-routes" : app.Index,
	"/docs/routing/caching" : app.Index,
	"/docs/routing/suspense" : app.Index,
	"/examples/static-render" : app.Index,
	"/docs/routing/hx-boost" : app.Index,
	"/examples/todo" : app.Index,
	"/docs/project-structure" : app.Index,
	"/examples" : app.Index,
	"/docs/index" : app.Index,
	"/blog" : app.Index,
	"/docs/routing/pages-and-index" : app.Index,
	"/docs/pages/templ" : app.Index,
}

var PageRenderList = []RenderDefault{
	{"/blog", blog.Page_},
	{"/docs/index/templ", docs_index_templ.Page_},
	{"/docs/routing/hx-boost", docs_routing_hxboost.Page_},
	{"/docs", docs_introduction.Page_},
	{"/examples/todo", examples_todo.Page_},
	{"/docs/routing/pages-and-index", docs_routing_pagesandindex.Page_},
	{"/docs/pages/static-pages", docs_pages_staticpages.Page_},
	{"/docs/routing", docs_routing.Page_},
	{"/docs/pages", docs_pages.Page_},
	{"/docs/pages/templ", docs_pages_templ.Page_},
	{"/docs/project-structure", docs_projectstructure.Page_},
	{"/docs/routing/dynamic-routes", docs_routing_dynamicrouting.Page_},
	{"/docs/routing/static-pages-and-routes", docs_routing_staticpagesandroutes.Page_},
	{"/docs/routing/caching", docs_routing_caching.Page_},
	{"/docs/routing/defining-routes", docs_routingfundamentals.Page_},
	{"/blog/temporarystandard", temporarystandard.Page_},
	{"/docs/index", docs_index.Page_},
	{"/docs/routing/suspense", docs_routing_suspense.Page_},
	{"/examples/static-render", examples_staticrender.Page_},
	{"/", home.Page_},
}

var RouteRenderList = []RenderDefault{
	{"/examples/todo/example", examples_todo.Example_},
	{"/examples/todo/code", examples_todo.Code_},
	{"/examples/suspense/code", examples_suspense.Code_},
	{"/examples/{slug}/dynamic-routes/code", examples_dynamicroutes.Code_},
	{"/examples/static-render/example", examples_staticrender.Example_},
	{"/examples/static-render/code", examples_staticrender.Code_},
}

var PageHandleList = []Handler{
	{"/examples/suspense", examples_suspense.Page, DefaultHandler},
	{"/examples/{slug}/dynamic-routes", examples_dynamicroutes.Page, ResReqHandler},
}

var RouteHandleList = []Handler{
	{"/examples/todo/addtask", examples_todo.AddTask, ResReqHandler},
	{"/examples/suspense/example", examples_suspense.Example, DefaultHandler},
	{"/examples/{slug}/dynamic-routes/example", examples_dynamicroutes.Example, ResReqHandler},
}
