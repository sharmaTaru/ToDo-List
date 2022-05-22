const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const db = require('./Config/mongoose');
const Task = require('./Modals/tasks');

app.use(express.static('./Assets'));

app.use('/', require('./Routes'));

app.set('view engine','ejs');
app.set('views','./Views');


app.listen(port, function(err){
    if(err){
        console.log('Error connecting to the server' , err);
    }
    console.log(`Successfully connected to the server on port: ${port}` );
})