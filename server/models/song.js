var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.ObjectId

var songSchema = new mongoose.Schema({
    artistname: { type: String, required: true},
    trackname: { type: String, required: true},
    collectionname: { type: String, required: true},
    collectionprice: { type: Number, required: true},
    previewurl: {type: String, required: true}
})

var Songs= mongoose.model("Song", songSchema);

module.exports = Songs