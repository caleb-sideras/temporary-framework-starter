# DOCS

- Installation


# BUGS

1. RENDERING STATIC FILES
`renderStaticFiles()` uses the `generated.go` file avaliable once `bun run build` is run -> therefore if another static function is declared it will NOT get rendered from the updated `generated.go`
FIX?
- Have two build commands? `bun run build` & `bun run generate`?
- Store in SQL lite?

# TODO

1. DIFFCULT
- (NOTE: wait till htmx 2.0 docs come out) Fix htmx issue with setting main opposed to default body for HX-Boost
- fix issue of templ generate not working on INITIAl build becuase of .mod dependencies
- generated.go file throwing errors if functions change -> use js first to destroy the files?
    https://chat.openai.com/share/cbfd2a95-6d04-4438-9593-8b2d7881e62b
- delete/create default files on BUILD - > html/css/js delete -> generated.go default
- get cli tools working

2. NORMAL
- move all duplicated logic to separate repo
- remove static dir config - just set default
- Fix mobile nav rail not highlighting
- Roadmap

- fix highlighting of focused color
- add transitions? not sure

REGEX double example

```regex
regex={`^\/projects\/gox-framework(?:$|\/.*)`}
```

HTMX 2.0 migration

```javascript
const shadowRoot = document.getElementsByTagName('t-link')
htmx.process(shadowRoot[0].shadowRoot)
```

```
htmx.min.js:1 TypeError: Cannot read properties of undefined (reading 'classList')
    at qn (htmx.min.js:1:40637)
    at m.onload (htmx.min.js:1:37682)
      S @ htmx.min.js:1
      fe @ htmx.min.js:1
      ae @ htmx.min.js:1
      m.onload @ htmx.min.js:1
      load (async)
      he @ htmx.min.js:1
      (anonymous) @ htmx.min.js:1
      o @ htmx.min.js:1
htmx.min.js:1 Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
    at qn (htmx.min.js:1:40637)
    at m.onload (htmx.min.js:1:37682)  
```
