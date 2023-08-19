const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelmodeSchema = new Schema({

    travelmodeId: {
        type: String,
        required: false
    },
    travelmodeName: {
        type: String,
        required: true
    },
    travelmodeDescription: {
        type: String,
        required: true
    }
});

const Travelmode = mongoose.model("Travelmode", travelmodeSchema);

module.exports = Travelmode;