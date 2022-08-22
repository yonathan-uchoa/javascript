const request = require('supertest')
const app = require('../utils/server')
const mongoose = require('mongoose')
const { initServer } = require('../database/mongodb-test')


describe('testing', () => {
    beforeAll(async () => {
        initServer()
    })
    afterAll(() => {
        mongoose.disconnect()
    })

    it('should return 201 - create user', async () => {
        const body = {
            user: {
                id: 1,
                name: "fulano",
                birthday: "1995-10-10",
                student: true
            }
        }
        await request
            .agent(app)
            .post('/user')
            .send(body)
            .expect(201)
    })

    it('should return 406 - something wrong!', async () => {
        const body = {}
        await request
            .agent(app)
            .post('/user')
            .send(body)
            .expect(406)

    })

    it('should return 200 - return user array', async () => {
        const user = {
            id: 1,
            name: "fulano",
            birthday: "1995-10-10",
            student: true
        }

        const response = await request
            .agent(app)
            .get('/user')
            .expect(200)

        expect(response.body).toMatchObject([user])
    })

    it('should return 200 - return a user', async () => {
        const user = {
            id: 1,
            name: "fulano",
            birthday: "1995-10-10",
            student: true
        }

        const response = await request
            .agent(app)
            .get('/user/1')
            .expect(200)

        expect(response.body.data).toMatchObject(user)
    })

    it('should return 200 - change one user', async () => {
        const user = {
            name: "beltrano",
            birthday: "1995-10-10",
            student: false
        }

        await request
            .agent(app)
            .patch('/user/1')
            .send({ user })
            .expect(200)

        const response = await request
            .agent(app)
            .get('/user/1')
            .expect(200)

        expect(response.body.data).toMatchObject(user)
    })

    it('should return 200 - delete one user', async () => {
        await request
            .agent(app)
            .delete('/user/1')
            .expect(200)

    })

    it('should return 404 - user not found', async () => {
        await request
            .agent(app)
            .delete('/user/1')
            .expect(404)

        await request
            .agent(app)
            .get('/user/1')
            .expect(404)

        await request
            .agent(app)
            .patch('/user/1')
            .send({})
            .expect(404)

    })
    it('should redirect to /', async () => {
        const response = await request
            .agent(app)
            .get('/testeste')
            .expect(302)

        expect(response.redirect).toBe(true)
    })

    it('hello my friend!', async () => {
        const response = await request
            .agent(app)
            .get('/')
            .expect(200)

        expect(response.body.message).toBe('Hello my friend!')
    })


})