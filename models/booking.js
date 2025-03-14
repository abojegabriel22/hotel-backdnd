const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    roomid: {
        type: String,
        required: true
    },
    fromdate: {
        type: String,
        required: true
    },
    todate: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totaldays: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'booked'
    }
},{timestamps: true})

const bookingModel = mongoose.model('bookings', bookingSchema)

module.exports = bookingModel