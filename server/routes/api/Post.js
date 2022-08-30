const router = require('express').Router();
const {
  createPost,findAll
} = require('../../controllers/Post');

router.route('/').get(findAll).post(createPost);


module.exports = router;
