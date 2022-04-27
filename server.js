require('dotenv').config()
const express = require('express')
const router = require('./controllers/router')
require('ejs')

const app = express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(4444, () => {
    console.log('listening on port 4444')
})