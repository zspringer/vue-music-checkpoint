var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var songRoutes = require('./routes/song-routes')
var server = express();
var port = 3000;
var cors = require('cors')



//MIDDLEWARE

server.use(cors())
server.options('*', cors())
server.use(express.static(__dirname + "/../public/dist"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api/songs', songRoutes)

server.listen(port, () => {
    console.log("starting up Node, on port", port)
})

var dbConnect = require("./config/db/mlab-config");