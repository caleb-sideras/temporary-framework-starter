## What is GoX?

GoX is a framework designed to make working with HTMX and Go easier

## Getting Started

Visit <a aria-label="next.js learn" href="https://gox-framework.org">https://gox-framework.org</a> to get started with GoX.

## Documentation

Visit [https://gox-framework.org/docs](https://gox-framework.org/docs) to view the full documentation.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js installation.
- Go Programming Language: [Download and Install Go](https://golang.org/doc/install)


### Installing

1. Clone the repository to your local machine.

   ```bash
   git clone --recursive https://github.com/caleb-sideras/gox-website.git
   ```

2. Navigate to the project's directory.

   ```bash
   cd gox
   ```

3. Install the project dependencies.

   ```bash
   npm install
   ```

### Running the Application

To run the application for development, use the following commands:

1. Building and running Javascript

   ```bash
   npm run build
   ```

2. Building and running Go. Working on getting this to work properly with 'npm run build'.

   ```bash
   cd src
   go run main.go build
   go run main.go run
   ```

## License
This project is licensed under the MIT License.
