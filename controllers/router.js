const express = require('express')
const Post = require('../models/posts')
const router = express.Router()

router.get('/', (req,res) => {
    Post.find({})
    .then((x) => res.render('index', { x }))
})

module.exports = router