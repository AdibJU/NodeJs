const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI

const connectDB = async() => {
    try {
        await mongoose.connect(uri) 
        console.log('mongoDB connected')
    } catch (error) {
        console.log (error.message)
    }
}

module.exports = connectDB