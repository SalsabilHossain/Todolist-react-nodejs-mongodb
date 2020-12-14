const mongoose = require('mongoose');
const Task = require('../model/todo');

exports.createTask = async (req, res) => {
    console.log("req body: ", req.body);

    try {
        const taskData = await Task.create(req.body);

        res.status(200).json({
            status: "success",
            data: {
                taskData
            },
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
};


exports.updateTask = async (req, res) => {
    try {
        const newTask = await Task.findById(req.params.id);
        
    }
    catch (error) {
        res.send('error')
        }
    }
