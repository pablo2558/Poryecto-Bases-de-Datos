const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    nationality: {
        type: String,
        required: true,
    }
})

const Client = mongoose.model('Client', storeSchema);

module.exports = {Client}