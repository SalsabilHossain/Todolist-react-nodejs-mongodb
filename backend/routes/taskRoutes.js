const express = require('express');
const taskController = require('../controller/taskController');
const router = express.Router();

router 
    .route('/add')
    .post(taskController.createTask);

module.exports = router;