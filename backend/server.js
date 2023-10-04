const app = require("./app");



// handling uncaught Exception
process.on("uncoughtException", (err) => {
    console.log('Error: ${err.message}');
    console.log('shutting down the server for handling uncought exception');
})

// config 
if (process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    })
}


// create server
const server = app.listen(process.env.PORT,() => {
    console.log('Server is running on http://localhost:${process.eventnames.PORT}')
})