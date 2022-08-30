const { Post } = require('../models');

module.exports = {
  async createPost({ body }, res) {
    const post = await Post.create(body);

    if (!post) {
      return res.status(400).json({ message: 'Unable to create matchup' });
    }

    res.status(200).json(post);
  },
  async findAll({ body }, res) {
    const result = await Post.find().limit(15);

    if (!result) {
      return res.status(404).json({ message: 'error finding posts' });
    }

    res.status(200).json(result);
  }
  
};
