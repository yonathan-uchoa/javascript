const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.get('/', (req, res) => {
    res.send('Hello my friend!')
})

router.route('/user')
    .get(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        const allUser = await User.find()
        res.status(200).send(allUser)
    })
    .post((req, res) => {
        const { user } = req.body
        res.setHeader('Content-Type', 'application/json')
        try {
            const newUser = User.insert(user)
            res.send(newUser)
        }
        catch (e) {
            res.send(e)
        }
    })

router.route('/user/:id')
    .get(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send({ data: 'user/post' })
    })
    .patch(async (req, res) => {
        const { user } = req.body
        const { id } = req.params
        res.setHeader('Content-Type', 'application/json')
        res.send(await User.update(id, user))
    })
    .delete(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send({ data: 'user/post' })
    })




module.exports = router




