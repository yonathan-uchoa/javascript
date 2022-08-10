const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello my friend!')
})

router.route('/user')
    .get((req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.sendStatus(200)
    })
    .post((req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send({data: 'user/post'})
    })

router.route('/user/:id')
    .get(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send({data: 'user/post'})
    })
    .patch(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send({data: 'user/post'})
    })
    .delete(async (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send({data: 'user/post'})
    })
    
    


module.exports = router
    
    
    

