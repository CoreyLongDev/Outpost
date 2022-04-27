const express = require('express')
const router = express.Router()
const Post = require('../models/posts')

router.get('/', (req,res) => {
    Post.find({})
    .then((x) => res.render('index', { x }))
    .catch(console.error)
})

router.get('/newPost', (req,res) => {
    res.render('newPost')
})

module.exports = router