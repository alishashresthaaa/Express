const express = require("express")
const router = express.Router()

// POST
// replace /login with / as the route has already been declared in the indexjs
router.post("/", (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name) return res.status(200).send(`Welcome ${name}`)
    return res.status(401).send("Please provide credentials")
})


module.exports = router