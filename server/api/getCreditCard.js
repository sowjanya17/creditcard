var router = require('express').Router();

const db = require('../db/db');


router.get('/creditDetails', function (res) {
    db.find({}, function (err,details) {
        if (err) res.send(err);
        res.json(details);
    });
})

module.exports = router;
