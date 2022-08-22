const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.route('/')
    .get(async (_req, res) => {
        const allUser = await User.find({}, '-_id -__v')
        res.status(200).send(allUser)
    })
    .post(async (req, res) => {
        const { user } = req.body
        const response = await User.insertUser(user)
        res.status(response.statusCode).send(response)
    })

router.route('/:id')
    .get((req, res) => {
        const { id } = req.params
        User.findOneUser(id).then(value => {
            res.status(value.statusCode).send(value)
        })
    })
    .patch((req, res) => {
        const { user } = req.body
        const { id } = req.params
        User.updateUser(id, user).then(value => {
            res.status(value.statusCode).send(value)
        })
    })
    .delete((req, res) => {
        const { id } = req.params
        User.deleteUser(id).then(value => {
            res.status(value.statusCode).send(value)
        })
    })

module.exports = router