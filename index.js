const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('./models/dbConfig')
const postsRoutes = require('./routes/postsController')

// midleware
app.use(bodyParser.json())
app.use('/posts', postsRoutes)


// lancer le server et ecouter sur le port 5500
app.listen(5500, () => console.log('le serveur est lance - port 5500'))
