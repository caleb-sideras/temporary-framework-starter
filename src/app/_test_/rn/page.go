package rn

import (
	"math/rand"
	"time"

	"fmt"

	"github.com/a-h/templ"
)

func Page_() templ.Component {

	return SuspenseExample()
}

func RandomNumber() templ.Component {
	rand.Seed(time.Now().UnixNano())

	randomNumber := rand.Intn(101)
	time.Sleep(3 * time.Second)

	return RandomNumberTempl(fmt.Sprintf("%d", randomNumber))
}
