const express = require('express');
const router = express.Router();

const deleteTaskController = require('../Controllers/deleteTask_controller.js');

router.get('/',deleteTaskController.deleteTask);


module.exports = router;