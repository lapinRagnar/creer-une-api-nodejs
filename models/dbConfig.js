const mongoose = require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/node-api",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log("la base de donnée MongoDb bien connecté!");
        else console.log("Erreur de connexion les mecs " + err)
    }
)




