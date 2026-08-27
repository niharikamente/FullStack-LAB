const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});


app.get('/about', (req, res) => {
    res.send('About us page');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log(`Visit http://localhost:${port} to view the app`);
});
