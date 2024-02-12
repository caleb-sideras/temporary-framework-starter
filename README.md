# DOCS

- Installation

1. DIFFCULT
- fix issue of templ generate not working on INITIAl build becuase of .mod dependencies -> might be fixed due to sequential cli command calling in bun?

- delete/create default files on BUILD - > html/css/js delete 
    - so we dont want to just delete all the files in this dir - simply because users might add shit to this?
    - store files we saved so we can remove them?
    - give a warning to the user about storing files here? 

- create code for the handlers instead of the definitions.go?
    - could still have the same process but the routes would be stored in separate package?

2. NORMAL
- Roadmap

- fix highlighting of focused color
- add transitions? not sure


# OTHER

## REGEX double example

```regex
regex={`^\/projects\/gox-framework(?:$|\/.*)`}
```
