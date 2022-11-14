var router = require('express').Router();

const db = require('../db/db');


router.get('/creditDetails', function (req, res, ) {
    console.log("test")
    var cardInfo = req.body
    db.find({}, function (err,details) {
        if (err) res.send(err);
        res.json(details);
    });
})

module.exports = router;
