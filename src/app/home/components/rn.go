package components

import (
	"github.com/a-h/templ"
	utils "github.com/caleb-sideras/gox2/src/app/home/utils"
	"log"
	"strconv"
)

func RandomNumber() templ.Component {

	randomNumber, err := utils.FetchRandomNumber()
	if err != nil {
		log.Println("Error getting random number:", err)
	}

	return RandomNumberTempl(strconv.FormatInt(int64(randomNumber), 10))
}
