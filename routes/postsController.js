const express = require('express')
const router = express.Router()

const { PostsModel } = require('../models/postsModel')

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log("On arrive pas d'afficher le model post :" + err);
    })
})

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log("Erreur - on n'arrive pas a créer le post " + err);
    })
})

module.exports = router

