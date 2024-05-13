const http = require('http');
const path = require('path');
const PORT = 3000;

const express = require('express');


const app = express();

const createPath = (page) => path.resolve(__dirname, '../client/public/html', `${page}.html`);

app.use(express.static('../client/public/css'));
app.use(express.static('../client/public/images'));
app.use(express.static('../client/public/font'));
app.use(express.static('../client/public/js'));

app.listen(PORT, (err) => {
    if(err){
        console.error('Error:', err)
    }else{
        console.log(`Server runing  on PORT ${PORT}`);
    }
});

app.use('/', (req,res) => {
    res.sendFile(createPath('index'));
});




app.use((req,res) => {
    
    res
    .status(404)
    .sendFile(createPath('error'));
});
