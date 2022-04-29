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
    .then(() => res.redirect("/"))
    console.log('adventure added')
})

router.get('/:id/edit', (req,res) => {
    const id = req.params.id;
    console.log(id)
    Blog.findById(id)
    .then((blog) => {
        res.render('edit', { blog: blog })
    })
    .catch(console.error)
})

router.put('/:id', (req,res) => {
    const id = req.params.id
    Blog.findOneAndUpdate(
        { _id: id },
        {
            title: req.body.title,
            location: req.body.location,
            activity: req.body.activity,
            content: req.body.content,
        },
        { new: true}
    )
    .then((blog) => {
        res.redirect('/')
    })
    .catch(console.error)
})

router.delete('/:id', (req,res) => {
    Blog.findOneAndDelete({ _id: req.params.id }).then(() => res.redirect('/'))
})


module.exports = router

router.get('/newPost', (req,res) => {
    res.render('newPost')
})

router.get('/about', (req,res) => {
    res.render('about')
})

router.get('/edit', (req,res) => {
    res.render('edit')
})