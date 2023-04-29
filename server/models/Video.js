const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    emotion: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('video', videoSchema);