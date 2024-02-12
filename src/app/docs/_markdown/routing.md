# Routing Fundamentals

The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Temporary.


## Terminology

First, you will see these terms being used throughout the documentation. Here's a quick reference:

- __Tree:__ A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.
- __Subtree:__ Part of a tree, starting at a new root (first) and ending at the leaves (last).
- __Root:__ The first node in a tree or subtree, such as a root layout.
- __Leaf:__ Nodes in a subtree that have no children, such as the last segment in a URL path.

```
example.com/dashboard/settings
└─domain    └─segment └─segment
            └─     path     ─┘           
```

- __URL Segment:__ Part of the URL path delimited by slashes.
- __URL Path:__ Part of the URL that comes after the domain (composed of segments).


## Roles of Folders and Files

Temporary uses a file-system based router where:

- __Folders__ are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.go file. See [Defining Routes]().
- __Files__ are used to create UI that is shown for a route segment. See [special files]().

## Route Segments
Each folder in a route represents a route segment. Each route segment is mapped to a corresponding segment in a URL path.

## Nested Routes

To create a nested route, you can nest folders inside each other. For example, you can add a new `/dashboard/settings` route by nesting two new folders in the `app` directory.

The `/dashboard/settings` route is composed of three segments:

- `/` (Root segment)
- `dashboard` (Segment)
- `settings` (Leaf segment)


## File Conventions

Temporary provides a set of special files to create UI with specific behavior in nested routes:

- `index`: Shared UI for a segment and its children
- `page`:	Unique UI of a route and make routes publicly accessible
- `route`:	Server-side API endpoints that return HTML partials
- `handle`:	Server-side API endpoints
- `error`:	Error UI for a segment and its children


## Colocation

In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the app directory.

This is because while folders define routes, only the contents returned by `page.go`, `route.go` and `handle.go` are publicly addressable
