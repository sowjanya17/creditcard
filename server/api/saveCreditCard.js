const router = require('express').Router();
const creditcard_validator = require('../validations/credit-card-validation');
const db = require('../db/db');


router.post('/save', function (req, res) {

    var cardInfo = req.body;
    if(cardInfo.cardnumber && creditcard_validator(parseInt(cardInfo.cardnumber))){
        db.insert(cardInfo, function (err) {
            if (err) res.send(err);
            res.json("Success");
        }) 
    }else{
        res.error("Invalid Card Number");
    }
    
})

module.exports = router;
