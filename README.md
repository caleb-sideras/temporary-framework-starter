# DOCS

- Installation

# TODO

1. DIFFCULT
- (NOTE: wait till htmx 2.0 docs come out) Fix htmx issue with setting main opposed to default body for HX-Boost
- fix issue of templ generate not working on INITIAl build becuase of .mod dependencies -> might be fixed due to sequential cli command calling in bun?
- get cli tools working

- delete/create default files on BUILD - > html/css/js delete 
    - so we dont want to just delete all the files in this dir - simply because users might add shit to this?
    - store files we saved so we can remove them?
    - give a warning to the user about storing files here? 

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
