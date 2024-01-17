# TODO

- mobile rail highlighting
- mobile dropdownlist color 
- finish blog
- add links
- fix highlighting of focused color
- add own docs -> video button ???
- remove redudant files
- add transitions? not sure

AFTER LAUNCH
- add slugs 
- add ssr url to navigation - NOT DOING THIS; want to serve static pages for speed, as this will be on a EC2 micro :)) $5 month

FINISHED

- change image (cdn?) - NO NEED TO OVERCOMPLICATE...
- add disclaimer for ui/framework - DONE
- add fixed width for drawer - DONE
- fix border shrink issue - DONE
- Hide Desktop Navigtaion
- fix static render
- bugs with navigation -> going back/forward breaks it, using tab/enter breaks it
- Mobile Navigation hard

NOTES

- Provide w and r objects to the index -> if so, all static pages will be rendered on build-time and inserted on request time




































# Ideas

## Components
- Navigation rail/drawer
- Card
-  


## Component Design
- 'items' share mutiple functionality - as it is the lowest level of interaction. There should be a base class that can be extended
- 'lists' share mutiple functionality - some may need to be hidden while others need to various animations. Base class


## Styling

- Unsure on styling. Something mechanical, simple. Should only be 3-4 color profiles.
- Space - there will be big emphasis on spacing text, titles and components.
- Islands of iteractivity. Not only in the implementation, but with respective functionality



## design system idea

- black/white for main iteractivity
- offwhite and offblack (dark grey and grey) for secondary containers
- focus on ISLANDS! large areas cover with same background and/or border. border if iteractive elements, filled if visual.:
