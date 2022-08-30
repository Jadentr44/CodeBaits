const db = require('../config/connection');
const { Post } = require('../models');

const postData = [{name:"guy111",summary:"here is an example post",technologies:["jquery","react"]},{name:"guy111",technologies:["jquery","react"],summary:"here is an another post"},{name:"guy111",technologies:["jquery","react"],summary:"here is an another post"},{name:"guy111",technologies:["jquery","react"],summary:"here is an another post"},{name:"guy111",technologies:["jquery","react"],summary:"here is an another post"},{name:"guy111",technologies:["jquery","react"],summary:"here is an another post"}]

db.once('open', async () => {
  await Post.deleteMany({});

  await Post.insertMany(postData);

  console.log('Technologies seeded!');
  process.exit(0);
});
