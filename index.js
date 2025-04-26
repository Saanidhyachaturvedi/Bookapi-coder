const express = require("express");

const ourApp = express();

ourApp.get("/", (request, response) => {
    response.json({message: "Hellow World" });
});
ourApp.listen(4000, () => console.log("Server is running"));