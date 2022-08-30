import React, { useState, useEffect } from 'react';
import Post from '../Post';


const post = [{name:"guy111",summary:"here is an example post",technologies:["jquery","react"]},{name:"guy111",technologies:["jquery","react"],summary:"here is an another post"}]
const Home = () => {
  let postRender = post.map(e=>{
    return <Post info={e} />
  })
  return (
    <>
    <h1 className='w-100 text-center border-bottom border-dark'>Home</h1>
    {postRender}
    </>
  );
};

export default Home;
