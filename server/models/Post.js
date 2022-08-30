const { Schema, model } = require('mongoose');

const post = new Schema({
  name: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  summary: {
    type: String,
    required:true,
  }
});

const Post = model('Post', post);

module.exports = Post;
