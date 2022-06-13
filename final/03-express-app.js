const express = require("express");
const app = express();
const path = require("path")

// setup static and middleware
// static - file that server doesnot have to change it. 
app.use(express.static("./public"))

// SSR
// app.get("/" , (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
// })

app.all("*", (req, res) => {
    res.status(404).send("404 Not Found")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000...")
})