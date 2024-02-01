const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    },
    status : {
        type : String
    }
},{
    timestamps :true
})

module.exports = Task = mongoose.model('Task', TaskSchema)  //user ekta model name jetar moddhe user namer table e userSchema data rakhbe

