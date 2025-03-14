const mongoose = require("mongoose")

const roomSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        required: true,
        enum: ['deluxe', 'non-deluxe']
    },
    description: {
        type: String,
        required: true
    },
},{timestamps: true})

const roomModel = new mongoose.model("rooms", roomSchema)

module.exports = roomModel