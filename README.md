# DOCS

- Installation

# TODO

- fix issue of templ generate not working on INITIAl build becuase of .mod dependencies
- generated.go file throwing errors if functions change -> use js first to destroy the files?
- delete/create default files on BUILD - > html/css/js delete -> generated.go default
- fix highlighting of focused color
- add transitions? not sure
- LOGS

- REFACTOR 
    - get shadowDOM working
    - get cli tools working
    - move all duplicated logic to separate repo
    - remove static dir config - just set default

- Fix mobile nav rail not highlighting
- Roadmap

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
