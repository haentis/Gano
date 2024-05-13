const http = require('http');
const path = require('path');
const PORT = 3000;

const express = require('express');


const app = express();

const createPath = (page) => path.resolve(__dirname, '../client/public/html', `${page}.html`);


app.listen(PORT, (err) => {
    if(err) return console.error('Error', err);
    else return console.log(`Server runing  on PORT ${PORT}`);
});

app.use('/', (req,res) => {
    res.sendFile(createPath('index'));
});




app.use((req,res) => {
    
    res
    .status(404)
    .sendFile(createPath('error'));
});
