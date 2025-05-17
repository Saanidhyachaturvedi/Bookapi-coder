const express = require("express");

//database
const Database = require('./database');

//initialization
const ourApp = express();

ourApp.get("/", (request, response) => {
    response.json({message: "I am Billu SHANDA" });
});

ourApp.get("/book", (req, res) => {
    return res.json({ books: Database.Book });
});

ourApp.listen(4000, () => console.log("Server is running"));