const express = require('express');
const taskController = require('../controller/taskController');
const router = express.Router();

router 
    .route('/add')
    .post(taskController.createTask);

 
router 
    .route('/:id')
    .put(taskController.updateTask);

router
    .route('/:id')
    .delete(taskController.deletetask);

module.exports = router;