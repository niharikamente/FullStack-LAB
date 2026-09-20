const express = require("express");

const logger = require("./middleware/logger");

const app = express();

const PORT = 3000;

// Register logging middleware
app.use(logger);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Express.js application.");
});

// Students route
app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Niharika"
        },
        {
            id: 2,
            name: "Rahul"
        }
    ]);
});

// About route
app.get("/about", (req, res) => {
    res.send("This application demonstrates Express middleware.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});