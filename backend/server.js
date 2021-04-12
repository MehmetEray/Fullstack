const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require('cors')

const route = require("./Router");
dotenv.config();
app.use("/", route);
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_ACCESS,{ useNewUrlParser: true , useUnifiedTopology: true}, () =>
    console.log("Database connected")
);
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.listen(4000,console.log("server is running " ));
