const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose')

async function initServer() {
    const mongod = await MongoMemoryServer.create({ instance: { port: 3940, dbName: 'users' } })
    mongoose.connect('mongodb://localhost:3940/users')
    return mongod
}

module.exports = { initServer }