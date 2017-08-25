var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId

var songSchema = new mongoose.Schema({
    artistName: { type: String, required: true},
    trackName: { type: String, required: true},
    collectionName: { type: String, required: true},
    collectionPrice: { type: String, required: true},
    previewUrl: {type: String, required: true},
    artworkUrl100: {type: String, required: true}
})

var Songs= mongoose.model("Song", songSchema);

module.exports = Songs