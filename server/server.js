/*
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// Parse incoming request bodies in a middleware before your handlers,
// available under the req.body property.
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

// Connect to your database here

app.post("/items", (req, res) => {
  // Extract the data you want to store from the request body
  const item = req.body;

  // Perform a database query to store the data
  database.query("INSERT INTO items SET ?", item, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error storing data");
    } else {
      res.send("Data stored successfully");
    }
  });
});

app.post("/kake", (req, res) => {
  const data = req.body;
  console.log(data);
  res.json(data);
});

app.get("/kake", (req, res) => {
  // req farge
  console.log(req.query.color);
  // res `takk for at du vlagte ${ farge }`
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
*/
