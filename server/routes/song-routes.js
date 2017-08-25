var express = require('express')
var router = express.Router()
var songs = require('../models/song')

router
    .get('/', (req, res, next) => {
        songs.find({})
            .then(songs => {
                res.send(songs)
            })
            .catch(next)
    })
    .get('/:id', (req, res, next) => {
        songs.findById(req.params.id)
            .then(song => {
                res.send(song)
            }).catch(next)
    })
        .post('/', (req, res, next) => {
            songs.create(req.body)
                .then(song => {
                    console.log(song)
                    res.send(song)
                }).catch(next)
        })
        .delete('/:id', (req, res, next) => {
            songs.findByIdAndRemove(req.params.id)
                .then(songs => {
                    res.send({ message: 'Successfully Removed' })
                }).catch(next)
        })

router.use('/', (err, req, res, next) => {
    if (err) {
        res.send(418, {
            success: false,
            error: err.message
        })
    } else {
        res.send(400, {
            success: false,
            error: 'Something failed please try again later'
        })
    }
})

module.exports = router