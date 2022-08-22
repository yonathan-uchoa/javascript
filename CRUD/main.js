const app = require('./src/utils/server')
const { initServer } = require('./src/database/mongodb-test')

initServer()

app.listen(3000, () => {
    console.log('app listen at 3000!')
})
