const Task = require("../Modals/tasks");
// let deleteButton = .getElementById('deleteButton')
module.exports.deleteTask = function(req,res){
    let id = req.query.id;
    Task.findByIdAndDelete(id,function(err,taskToDelete){
        if(err){
            console.log(`Error in deleting task ${err}`);
        }
        console.log(taskToDelete)        
        return res.redirect('back');
    })
}