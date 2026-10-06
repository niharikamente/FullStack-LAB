const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.static("public"));
const students = [
  {
    id: 1,
    name: "Vani",
    age: 19,
    course: "CSE"
  },
  {
    id: 2,
    name: "Vaishnav",
    age: 20,
    course: "ECE"
  },
  {
    id: 3,
    name: "Priya",
    age: 19,
    course: "AI & ML"
  }
];

app.get("/", (req, res) => {
  res.send("Student Management Application");
});

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    course: req.body.course
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});