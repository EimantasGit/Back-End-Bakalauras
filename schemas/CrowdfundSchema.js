const mongoose = require('mongoose')

const crowdfundSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    comments: [{
        type: Number
    }],
    followers: [{
        type: String
    }]
})

module.exports = mongoose.model("Crowdfund", crowdfundSchema);