const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
app.use(express.static('static'))
app.use(express.static('static/cwiczenia'))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/static/index.html"))
})
app.get("/cw/:id", (req, res) => {
    const { id } = req.params

    res.sendFile(path.join(__dirname, `/static/cwiczena/${id}.html`))
})
app.listen(4000)