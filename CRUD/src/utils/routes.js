const express = require('express')
const router = express.Router()

const User = require('../models/user')


router.get('/', (_req, res) => {
    res.send('Hello my friend!')
})

router.route('/user')
    .get(async (_req, res) => {
        const allUser = await User.find({}, '-_id -__v')
        res.status(200).send(allUser)
    })
    .post(async (req, res) => {
        const { user } = req.body
        res.send(await User.insertUser(user))
    })

router.route('/user/:id')
    .get(async (req, res) => {
        const { id } = req.params
        res.send(await User.findOneUser(id))
    })
    .patch(async (req, res) => {
        const { user } = req.body
        const { id } = req.params
        res.send(await User.updateUser(id, user))
    })
    .delete(async (req, res) => {
        const { id } = req.params
        res.send(await User.deleteUser(id))
    })

module.exports = router