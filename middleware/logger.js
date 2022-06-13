// request => middleware => response

// express automatically provides req, res to the middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method, url, time)

    // When middleware is done executing it terminates the server by default
    // either you send your own response from middleware
    // res.send("after middleware")
    
    // or you execute the function of the given path using next that points to the function
    next()
}


module.exports = logger;