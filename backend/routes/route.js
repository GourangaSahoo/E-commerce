const express = require("express");//express module
const controller = require("../controllers/user.controller");//importing the controller
const app = express();//Initializing the express

app.get("/", controller.home);//specifying the control to handle the  request 
// Export the configured Express application to be used in other parts of the application

app.post("/register", controller.register);
app.post("/login", controller.login);
module.exports = app;