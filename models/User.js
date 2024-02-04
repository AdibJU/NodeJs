const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname : {
        type : String
    },
    lname : {
        type : String  
    },
    email : {
        type : String  
    },
    password : {
        type : String  
    }
},{
    timestamps :true
})

module.exports = User = mongoose.model('User', userSchema)  //user ekta model name jetar moddhe user namer table e userSchema data rakhbe

