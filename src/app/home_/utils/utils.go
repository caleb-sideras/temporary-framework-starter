package utils

import (
	"fmt"
	"io"
	"net/http"
)

type Number struct {
	Number int
}

const randomOrgAPIURL = "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain"

func FetchRandomNumber() (int, error) {
	resp, err := http.Get(randomOrgAPIURL)
	if err != nil {
		return 0, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, err
	}

	var randomNumber int
	_, err = fmt.Sscanf(string(body), "%d", &randomNumber)
	if err != nil {
		return 0, err
	}

	return randomNumber, nil
}
