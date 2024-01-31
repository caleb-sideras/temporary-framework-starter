# Temporary Project Structure

This page provides an overview of the file and folder structure of a Temporary project. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories.



## Top-level folders

- __src:__ Application source folder
- __app:__ App Router
- __public:__	Static assets to be served
- __temporary:__ Temporary Framework source



## Top-level files

- `temporary.config.js`	Configuration file for Temporary
- `go.mod` Module and Package dependencies for Go
- `go.sum` Cryptographic hashes for module versions for GO
- `package.json` Project dependencies and scripts
- `bun.build.js` Temporary build-step for JavaScript
- `tsconfig.json`	Configuration file for TypeScript
- `index.ts` Global TypeScript to be served
- `.gitignore` Git files and folders to ignore


## `app` Routing Conventions

### Routing Files

- `index.go`: Index
- `page.go`: Page
- `route.go`: Route

### Nested Routes

- `folder`:	Route segment
- `folder/folder`: Nested route segment

### Dynamic Routes

- `_folder_`:	Slug route segment

### Route Groups and Private Folders

- `folder_`: Group routes without affecting routing
- `_folder`: Opt folder and all child segments out of routing
