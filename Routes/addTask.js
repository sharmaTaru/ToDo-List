const express = require('express');
const router = express.Router();

const addTaskController = require('../Controllers/addTask_controller');
 
router.post('/',addTaskController.addTask);

module.exports = router;