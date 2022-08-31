const db = require('../config/connection');
const { Post } = require('../models');

const postData = [{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`},{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`},{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`},{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`},{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`},{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`},{name:"guy111",technologies:["javascript","react"],summary:"here is an another post",code:`console.log("hello world")`}]

db.once('open', async () => {
  await Post.deleteMany({});

  await Post.insertMany(postData);

  console.log('Technologies seeded!');
  process.exit(0);
});
