require('dotenv').config()
const express = require('express')
const app = express()
// const ejsLayouts = require('express-ejs-layouts')
const router = require('./controllers/router')
require('ejs')

// app.use(ejsLayouts)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.set('view engine', 'ejs')


app.listen(4444, () => {
    console.log('listening on port 4444')
})