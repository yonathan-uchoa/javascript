const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use((_req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})
app.use('/', routes)
app.use((_req, res) => {
    res.redirect('/')
})
module.exports = app