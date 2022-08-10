const express = require ('express')
const routes = require('./routes')
const app = express()


app.use('/', routes)
app.use((req, res, next) => {
    res.redirect('/')
})


module.exports = app