const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({

    destinationName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    climate: {
        type: String,
        required: false
    },
    culture: {
        type: String,
        required: false
    },
    attractions: {
        type: String,
        required: false
    },
    destinationImage: {
        type: String,
        required: false
    }
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;