const express = require('express')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use((_req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    next()
})
app.all('/', (_req, res) => {
    res.send({ message: 'Hello my friend!' })
})
app.use('/user', routes)
app.use((_req, res) => {
    res.redirect('/')
})

module.exports = app