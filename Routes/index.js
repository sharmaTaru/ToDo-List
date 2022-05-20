const express = require('express');
const router = express.Router();

const ToDoController = require("../Controllers/ToDo_controller.js");

router.get('/',ToDoController.ToDo);

module.exports = router;