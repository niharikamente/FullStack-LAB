const express = require("express");

const app = express();

const PORT = 3000;

// Student data
const students = [
    { id: 1, name: "Anjali", course: "CSE" },
    { id: 2, name: "Rahul", course: "ECE" },
    { id: 3, name: "Priya", course: "CSE" },
    { id: 4, name: "Arjun", course: "IT" },
    { id: 5, name: "Sneha", course: "AI & ML" }
];

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Student Management Server");
});

// Students route
app.get("/students", (req, res) => {
    res.json(students);
});

// About route
app.get("/about", (req, res) => {
    res.send(
        "This is a basic Express.js Student Management Application."
    );
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page not found");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});