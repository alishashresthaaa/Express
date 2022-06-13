const express = require("express");
const app = express()

const {products} = require("./data")

app.get("/", (req, res) => {
    res.send("<h1>Home<h1><a href='/api/products'>Products</a>")
})


app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name , image} = product;
        return {id, name, image}
    })
    // res.json([{name:"john"}, {name:"susan"}])
    res.json(newProducts)
})

app.get("/api/products/1", (req,res) => {
    const product = products.find((product) => product.id === 1)
    res.json(product)
})

app.get("/api/products/:id", (req, res) => {
    const {id} =req.params
    const product = products.find((product) => product.id === Number(id))
    if(!product) return res.status(404).send("No product found")
    return res.json(product)
})

app.get("/api/v1/query",(req, res) => {
    console.log(req.query)
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        // res.status(200).send("no product matches your search")
       return res.status(200).json({success:true ,data:[]})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log("Server listening on port 5000...")
})