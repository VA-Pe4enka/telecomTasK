package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

var router *gin.Engine

func main() {
	router = gin.Default()

	router.LoadHTMLGlob("front/templates/index.html")

	router.Static("/js", "./js/index.js")

	router.GET("/", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", gin.H{"title": "Home Page"})
	})

	router.Run()
}

//func JSHandler(c *gin.Context) {
//	c.Writer.Header().Set("Content-Type", "application/x-javascript")
//}
