const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    wallet: {
        type: String, 
        required: true,
        unique: true
   },
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    contributed: [{
        type: Number
    }],
    bookmarked:{
        type: [Number]
    },
    initialized: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema);