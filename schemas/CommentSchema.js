const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    crowdfundID: {
        type: Number, 
        required: true,
   },
    content: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema);