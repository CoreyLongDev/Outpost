const express = require('express')
const Blog = require('../models/posts')
const router = express.Router()

router.get('/', (req,res) => {
    Blog.find({})
    .then((x) => res.render('index', { x }))
    .catch(console.error)
})

router.post('/newPost', (req,res) => {
    Blog.create(req.body)
    .then((blog) => res.redirect("/"))
})
module.exports = router

router.get('/newPost', (req,res) => {
    res.render('newPost')
})

router.get('/about', (req,res) => {
    res.render('about')
})