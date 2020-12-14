const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Todo = new Schema(
    {
        tasks: { type: String, required: true },
        
    },
    { timestamps: true },
)

module.exports = mongoose.model('todo', Todo);