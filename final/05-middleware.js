const express = require("express");

const app = express()

const logger = require("./middleware/logger")
const authorize = require("./middleware/authorize");

// Implements seirally
app.use([logger, authorize])

// Middleware is used only by the url that contains the path :"/api"
app.use("/api", logger)

app.get("/", (req, res) => {
    res.send("home")
})

app.get("/about", (req, res) => {
    res.send("about")
})

app.get("/api/items", (req, res) => {
    console.log(req.user)
    res.send("Items")
})

app.all("*", (req, res) => {
    res.status(401).send("404 Not found")
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})