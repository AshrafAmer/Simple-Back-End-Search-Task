
// ====== import all required packages ======
const express = require("express");
const path = require("path");

// ====== import search controller ======
const SearchController = require("./Controllers/SearchController");


// ====== Up Our App Server ======
const server = express();


server.listen(8085, () => {
    console.log("Server started Sucessfully...");
});


server.use((request, response, next) => {
    console.log(
        "Just for test Middlewares, Welcome..." +
            request.method +
            " : " +
            request.url
    );
    next(); // do nothing
});


// ====== Configure static paths and view engines ======
server.use(express.json());
//urlencoded to generate http post body object
server.use(express.urlencoded({ extended: false }));


server.use('/search', SearchController);