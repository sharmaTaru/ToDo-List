const express = require('express');
const router = express.Router();

const ToDoController = require("../Controllers/ToDo_controller.js");

router.get('/',ToDoController.ToDo);
router.use('/addTask',require('./addTask.js'));
router.use('/deleteTask',require('./deleteTask.js'));
 
module.exports = router;