const express = require('express');
const taskController = require('../controller/taskController');
const router = express.Router();

router 
    .route('/add')
    .post(taskController.createTask);

 
router 
    .route('/update')
    .put(taskController.updateTask);

module.exports = router;