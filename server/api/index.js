var router = require('express').Router();


router.use('/api', require('./saveCreditCard'));
router.use('/api', require('./getCreditCard'));

module.exports = router;
