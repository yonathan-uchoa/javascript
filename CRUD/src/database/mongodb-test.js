const { MongoMemoryServer } = require('mongodb-memory-server');
const { mongo } = require('mongoose');

const mongod = new MongoMemoryServer({ instance: { port: 3940, dbName: 'users' } })

mongod.initServer = () => {
    mongod.start()
}

module.exports = { mongod }