const express = require('express');
const taskController = require('../controller/taskController');
const router = express.Router();

router 
    .route('/add')
    .post(taskController.createTask);

 
router 
    .route('/update')
    .put(taskController.updateTask);

router
    .route('/:id')
    .delete(taskController.deletetask);

router
    .route('/read')
    .get(taskController.display);

module.exports = router;