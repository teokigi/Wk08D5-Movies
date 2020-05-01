const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(movCol){

    const router = express.Router();

    router.get('/',function(req,res){
        movCol.find().toArray()
        .then(docs => res.json(docs))
        .catch((error)=>{
            console.error(error);
            res.status(500);
            res.json({error:error})

        })
    });
    //Tested in Insomnia, with Gantz. success
    router.get('/:id',function(req,res){
        const id = req.params.id;
        movCol.findOne({_id:ObjectID(id)})
        .then(doc => res.json(doc))
    });
    //Tested in insomnia, Gantz was removed. ==> reseeding after.
    router.delete('/:id',function(req,res){
        const id = req.params.id;
        movCol.deleteOne({_id:ObjectID(id)})
        .then(doc => res.json(doc))
    });

    return router;
}


module.exports = createRouter;
