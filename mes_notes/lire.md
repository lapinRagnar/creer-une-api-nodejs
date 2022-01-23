site du tuto
---------

https://www.youtube.com/watch?v=hjR52rCqlQU

######
installer le package express et nodemon
######

> npm i -s express nodemon

ajouter un script dans packages.json:


pour lancer le programme:
> npm run start ou npm start


- installer mongodb sur notre machine
nom de la base : node-api
creer une table: posts


######
installer le packages mongoose
####
permet de gerer une base de données
https://www.npmjs.com/package/mongoose


- creer un fichier : models/postsModel.js

###
configuration d'une routes
###

il faut lire l'url localhost:5500/posts
pour afficher le post


###
On va se créer un petit crud
###

- installer le package body-parser
> npm i body-parder 

pour tester la création d'un post, on va utiliser postmam
- on lance postman, on clique sur le plus 
- et on met, sur GET : http://localhost:5500/posts
et on obtient notre post
- et pour créer un post, on se met sur POST puis notre url: http://localhost:5500/posts
    - on selectionnne body, puis
    - on selectionne la radio: raw et puis on change text en json, on met ca dans le body:
        {
            "author": "Mr moi meme",
            "message": "salut les gens, ca marche !"
        }

        et on creer un nouveau post
    - et pour verifier si toute a fonctionner on peut le regarder sur notre base de données ou
    - on met, sur GET : http://localhost:5500/posts

et on obtient le resultat:
[
    {
        "_id": "61ed378583c031584e294c7a",
        "author": "lapin",
        "message": "coucou",
        "date": "2022-01-23T18:30:57.122Z"
    },
    {
        "_id": "61ed9ec290edc4512dad3402",
        "author": "Mr moi meme",
        "message": "salut les gens, ca marche !",
        "date": "2022-01-23T18:30:26.483Z",
        "__v": 0
    }
]
