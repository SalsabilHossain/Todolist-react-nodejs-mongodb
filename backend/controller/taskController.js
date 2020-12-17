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
        const newTask = await Task.findByIdAndUpdate(req.params.id);
        console.log(newTask);
        newTask= req.body;
        const a1 =await newTask.save();
        res.json(a1);
        

        
    }
    catch (error) {
        res.send('error');
        }
    }

    exports.deletetask = async (req, res) => {
       const id=req.params.id;
       Task.findByIdAndDelete(id)
       .then(result =>{
           console.log('deleted');
        
       })
       .catch(err =>{
           console.log(err);
       })
    }


    exports.display = async (req, res) => {
        Task.find({}, (err,result)=>{
            if(err){
                res.send(err)
            }
          res.send(result)  
        })
        
     }
 