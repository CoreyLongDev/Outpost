require('dotenv').config()
const express = require('express')
const router = require('./controllers/router')

const app = express()
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

//KEEP FOR QUICK TROUBLESHOOTING
// app.get('/', (req,res) => {
//     res.send('it works!')
// })
app.listen(4444, () => {
    console.log('listening on port 4444')
})