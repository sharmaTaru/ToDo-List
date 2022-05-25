const db = require('../Config/mongoose')
const Task = require("../Modals/tasks")
// let month = require('../Assets/Js/index')

module.exports.ToDo = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log("Error in getting tasks");
            return;
        }
        return res.render('ToDo',{
            title: "ToDo List",
            allTasks: tasks,
        });
    });
};