import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

// password=>  iOpQotJHva3nN7Iy
// mongodb+srv://admin:<password>@cluster0.axobv.mongodb.net/<dbname>?retryWrites=true&w=majority//replace the password

// app config
const app = express();
const port = process.env.PORT || 9000; // 200 => means every thing is okay, 500=> server error, 404=>error in client side

//middlewares
app.use(express.json()); // pass the responses as the json object


//whenever we receive requests we will be setting headers to these which means we acceot
//all the request and then we pop to these functions that are here. 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*"),
    res.setHeader("Access-Control-Allow-Headers","*"),
    next()

})

// DB Config
const connection_url =
  "mongodb+srv://admin:iOpQotJHva3nN7Iy@cluster0.axobv.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World")); //we do a get reqeust =>req and response=>res
app.get("/v1/posts", (req, res) => res.status(200).send(Data));









//THIS CODE FETCHES AND GIVES ALL THE DATA FROM THE DATABASE 
app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err); // if there is an error chage  the status to 500 and return the error
    } else {
      res.status(200).send(data); // sendback the data that we created
    }
  });
});







//THIS CODE ADDS DATA TO THE DATABASE FROM THE POSTMAN BODY JSON SEND METHOD
app.post("/v2/posts", (req, res) => {
  //Post request is to add data to the database
  //It will let us add a video document to the videos COLLECTION
  const dbVideos = req.body; //the body part that we wrote in postman
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err); // if there is an error chage  the status to 500 and return the error
    } else {
      res.status(201).send(data); // sendback the data that we created
    }
  });
});

//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`)); // we get back a Hello World message
