# DOCS

- Intro ->  Philoshopy behind Temporary
- Routing Fundamentals -> ```_dir_ , _dir, dir_```, page.go, index.go,
- Pages -> page.go & templ
- Index -> index.go & templ
- GoX Router
- Roadmap


# TODO

- fix issue of templ generate not working on INITIAl build becuase of .mod dependencies
- generated.go file throwing errors if functions change -> use js first to destroy the files?
- delete/create default files on BUILD - > html/css/js delete -> generated.go default
- fix highlighting of focused color
- remove redudant files
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
