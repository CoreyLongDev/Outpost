const mongoose = require('mongoose')

const mongoURI =
process.env.NODE_ENV === 'production'
    ? process.env.DB_URL
    : 'mongodb+srv://admin:QAZxsw90@cluster0.dal9c.mongodb.net/outpost?retryWrites=true&w=majority'

mongoose.connect(mongoURI)
.then((instance) => 
        console.log(`connected to db: ${instance.connections[0].name}`))
        .catch((error) => console.log('connection error', error))

        module.exports = mongoose