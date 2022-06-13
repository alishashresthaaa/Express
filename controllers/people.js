let {people} = require("../data")

const getPeople = (req, res) => {
    res.status(200).json({success:true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(400).json({success:false, msg:"Please provide name value"});
    return res.status(201).send({success:true, data:name})
}

const updatePerson = (req, res) => {
    const {id} = req. params;
    console.log(id)
    const {name} = req.body;

    const person = people.find((item) => {
        return item.id === Number(id)
    })
    console.log(person)

    if(!person) return res.status(404).json({success:false, msg:`No person with id ${id}`});

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})
}

const deletePerson = (req,res) => {
    const person = people.find((item) => {
        return item.id === Number(req.params.id)
    })
    
    if(!person) return res.status(404).json({success:false, msg:`No person with id ${req.params.id}`});

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople})
}

module.exports = {getPeople, createPerson, updatePerson, deletePerson}