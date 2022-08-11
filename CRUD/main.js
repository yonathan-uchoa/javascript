const app = require('./src/utils/server')
const mongoose = require('mongoose')
const { mongod } = require('./src/database/mongodb-test')

mongod.initServer()
mongoose.connect('mongodb://localhost:3940/users')


app.listen(3000, () => {
    console.log('app listen at 3000!')
})