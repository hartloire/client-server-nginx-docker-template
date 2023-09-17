// server/index.js

const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.get("/", (req, res) =>{
  res.send("Hi")
})
app.get("/values", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});