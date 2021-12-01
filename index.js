const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+"/about.html"))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname+"/contact-me.html"))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+"/404.html"))
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});