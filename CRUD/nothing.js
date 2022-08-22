const app = require('./src/utils/server')
const mongoose = require('mongoose')
const { mongod } = require('./src/database/mongodb-test')


module.exports = async () => {
    mongod.initServer()
    mongoose.connect('mongodb://localhost:3045/users')


    app.listen(3045, () => {
        console.log('app listen at 3045!')
    })
}