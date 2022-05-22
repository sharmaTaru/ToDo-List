const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task_database');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the database'));

db.on('open',function(){
    console.log("Successfully connected to database")
});
