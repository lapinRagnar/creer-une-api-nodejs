const express = require('express')
const router = express.Router()
const ObjectID = require('mongoose').Types.ObjectId()

const { PostsModel } = require('../models/postsModel')

// Crud - afficher les données
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log("On arrive pas d'afficher le model post :" + err);
    })
})

// crud - creer des données
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

// mettre à jour ou modifier les données
router.put('/:id', (req, res) => {

    if (!ObjectID.isValid(req.params.id))
        return res.status(404).send("ID inconnu " + req.params.id)
    
    const updatedRecord = {
        author: req.body.author,
        message: req.body.message
    }

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updatedRecord},
        { new: true},
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log("erreur, echec de la mises à jour " + err);
        }
    )
})


// delete
router.delete('/:id', (req, res) => {

    if (!ObjectID.isValid(req.params.id))
        return res.status(404).send("ID inconnu " + req.params.id)
    
    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log("erreur de la suppression : " + err);
        }
    )
})




module.exports = router

