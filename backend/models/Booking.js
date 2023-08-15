const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    bookingId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    DOB: {
        type: String,
        required: false
    },
    noOfSeats: {
        type: Number,
        required: false
    },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;