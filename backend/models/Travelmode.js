const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelmodeSchema = new Schema({

    travelmodeId: {
        type: String,
        required: true
    },
    travelmodeName: {
        type: String,
        required: false
    },
    travelmodeDescription: {
        type: String,
        required: false
    }
});

const Travelmode = mongoose.model("Travelmode", travelmodeSchema);

module.exports = Travelmode;