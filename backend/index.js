//importing the necessary modeules
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const routes = require("./routes/route");//importing the routes from the routes folder
const { default: mongoose } = require("mongoose");
dotenv.config();
 
const app = express();//initializing the express
const port = process.env.PORT || 4000;
//Loading the enviromental variable from  .env config


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB");
    } catch(err){
        console.log(err);
        console.log("Connection Failed");
    }
}

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", routes);//mount routes 

//starting the server on the specified port
app.listen(port, ()=>{
    connectDB();
    console.log(`Your app is working on http://localhost:${port}`);//printing the port in which the server works
})