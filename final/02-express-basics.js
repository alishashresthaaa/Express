const express = require("express")
const app = express()

// tranfer the html, css, js, image file inside navbar-app for the code to run 

// app.get
app.get("/", (req, res) => {
    res.status(200).send('Home Page')
})

app.get("/about", (req, res) => {
    res.status(200).send("About Page")
})

// app.all - all http request
app.all("*" ,(req, res) => {
    res.status(404).send("404 Not Found")
})

// app.listen
app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})

