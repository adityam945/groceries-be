require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");
const http = require("https");

const app = express();
const port = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());
//
const Users = require("./src/routes/users.routes");

app.use("/users", Users);

//
const uri = process.env.ATLAS_URI || process.env.MONGODB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  if (!req.user)
    return res.status(401).json({ success: false, message: "Invalid Route" });
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});