const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/tutorials.json");

app.get("/", (req, res) => {
  res.send("Courses Api Running!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.id === id);
  res.send(selectedCourse);
});

app.get("/courses/:uid", (req, res) => {
  const userID = req.params.uid;
  const selectedAccess = courses.find((course) => course.uid === userID);
  res.send(selectedAccess);
});

app.listen(port, () => {
  console.log("tutorial site running on port no:", port);
});
