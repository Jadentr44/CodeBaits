const router = require('express').Router();
const {
  createPost,findAll,findById
} = require('../../controllers/Post');

router.route('/').get(findAll).post(createPost);
router.route('/:ID').get(findById)


module.exports = router;
