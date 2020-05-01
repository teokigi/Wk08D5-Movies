const express = require('express');
const ObjectID = requrie('mongodb').ObjectID;

const createRouter = function(movCol){

    const router = express.Router();

    router.get('/',function(req,res){
        movCol.find().toArray()
        .then(docs => red.json(docs))
        .catch((error)=>{
            console.error(error);
            res.status(500);
            res.json({error:error})

        })
    });

    return router;
}


module.exports = createRouter;
