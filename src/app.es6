'use strict'

const path = require('path')
const mime = require('mime')
const bluebird = require('bluebird')
const promisify = bluebird.promisify

const express = require('express')
var app = express()

class HelloError extends Error {
    constructor(message) {
        super(message)
        this.message = message
        this.code = 400
        this.name = "HelloError"
    }
}

function doSomething(delay, callback) {
    setTimeout(() => {

        if (Math.floor(Math.random() * 1000) % 2 == 0) {
            return callback(new HelloError("oh noes!"))
        }
        callback(null, "Hello World!")

    }, delay)
}

// Static Files
app.use(express.static(path.join(__dirname, '../static'), {
    dotfiles: 'ignore',
    index: false,
    setHeaders: (res, path, stat) => {
        res.set('Content-Type', mime.lookup(path))
    }
}))

// path: '/'
app.use('/', (req, res) => {

    promisify(doSomething)(500).then((result) => {
        res.status(200).send(result)
    }).catch(HelloError, (err) => {
        res.status(400).send(err)
    }).catch(SomeOtherError, (err) => {

    })
})


module.exports = app
