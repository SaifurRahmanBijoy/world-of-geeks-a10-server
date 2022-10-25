const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

// const tutorials=

app.get("/", (req, res) => {
  res.send("Tutorial Api Running!");
});

app.listen(port, () => {
  console.log("tutorial site running on port:", port);
});
