const express = require('express')
const Blog = require('../models/posts')
const router = express.Router()

router.get('/', (req,res) => {
    Blog.find({})
    .then((x) => res.render('index', { items: x }))
    .catch(console.error)
})

router.post('/newPost', (req,res) => {
    Blog.create(req.body)
    .then((blog) => res.redirect("/"))
    console.log('new adventure added')
})

// router.get('/:id', (req,res) => {
//     Blog.findById(req.params.id)
//     .then((x) => { res.render('/about', x)
//     })
//     .catch(console.error)
// })

module.exports = router

router.get('/newPost', (req,res) => {
    res.render('newPost')
})

router.get('/about', (req,res) => {
    res.render('about')
})