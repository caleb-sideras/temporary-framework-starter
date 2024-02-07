package main

import (
	"io"
	"os"
)

//go:generate go run main.go

func main() {

	inputFile, err := os.Open("../definitions.txt")
	if err != nil {
		panic(err)
	}
	defer inputFile.Close()

	outputFile, err := os.Create("../definitions.go")
	if err != nil {
		panic(err)
	}
	defer outputFile.Close()

	_, err = io.Copy(outputFile, inputFile)
	if err != nil {
		panic(err)
	}
}
