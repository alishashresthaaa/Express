
// tranfer the html, css, js, image file inside navbar-app for the code to run 

const http = require("http");
const {readFileSync} = require("fs")

// get all files
const homePage = readFileSync("./navbar-app/index.html")
const homeStyles = readFileSync("./navbar-app/style.css")
const homeJs = readFileSync("./navbar-app/browser-app.js")
const homeLogo = readFileSync("./navbar-app/logo.svg")

const server = http.createServer((req, res) => {
    // Meta data about our response - Status code
    // res.writeHead(200, {'content-type':'text/html'})
    // res.write(`<h1>Home Page</h1>`)
    // // .end shows the communication is avaialble
    // res.end()


    if(req.url === "/"){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }    
    else if(req.url === "/styles.css"){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(req.url === "/browser-app.js"){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeJs)
        res.end()
    }
    else if(req.url === "/logo.svg"){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }
    else if(req.url === "/about"){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(`<h1>About Page</h1>`)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write(`<h1>404 Page</h1>`)
        res.end()
    }
})


server.listen(5000)