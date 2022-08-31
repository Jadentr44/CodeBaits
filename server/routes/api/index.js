const router = require('express').Router();
const postRoute = require('./Post');



router.use('/post', postRoute);

module.exports = router;
