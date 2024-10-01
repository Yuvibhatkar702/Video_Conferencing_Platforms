// import all packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


// import all the modules
import {createServer} from "node:http"; // connect Express instance to server
import {Server} from "socket.io";
import { connectToSocket } from "./controllers/socketManager.js";
import router from "./routes/user.routes.js";


//create app 
const app = express();


//Createing Server
const server = createServer(app);
const io = connectToSocket(server); //call the Function


// middlewares
app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb", extended:true}));


// Routes
app.use("/api/v1/user", router);





// Main Function
const start = async () => {  
    // connect to database
    const connectionDb = await mongoose.connect("mongodb+srv://yuvibhatkar702:ZoomProject@cluster0.zllqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongooes Connect.. on host ${connectionDb.connection.host}`);


    //  Lisning on port
    server.listen(app.get("port"), () => {
    console.log("Lisning on Port 8000");
  });
}

start();