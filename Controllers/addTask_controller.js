const db = require('../Config/mongoose')
const Task = require("../Modals/tasks")

module.exports.addTask = function(req,res){
    Task.create({
        Description: req.body.Description,
        Category: req.body.Category,
        Date: req.body.Date
    }, function(err, newTask){
        if(err){
            console.log("Error in creating new task");
            return;
        }
        return res.render('ToDo',{
            title : "ToDo List"
        })
    })
}