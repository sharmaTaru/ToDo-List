const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('./Assets'));
app.set('view engine','ejs');
app.set('views','./Views');
app.use(express.urlencoded());
app.use('/', require('./Routes'));


app.listen(port, function(err){
    if(err){
        console.log('Error connecting to the server' , err);
    }
    console.log(`Successfully connected to the server on port: ${port}` );
})