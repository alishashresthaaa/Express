const express = require("express")
const router = express.Router()

let {people} = require("../data")

const {getPeople, createPerson, updatePerson, deletePerson} = require("../controllers/people")

// GET 
// replace /api/people with / as the route has already been declared in the indexjs
router.get("/", getPeople)

// POST
router.post("/",createPerson )

// PUT
router.put("/:id", updatePerson)
   
// DELETE
router.delete("/:id" ,deletePerson )

module.exports = router