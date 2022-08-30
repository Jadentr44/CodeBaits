import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios'
import { allPost } from '../utils/api';



const Home = ({posts}) => {
  console.log(posts)
  let postComponents = posts.map(e=>{
    return <Post info={e}/>
  })
  return (
    <div className='mh-100' >
    <h1 className='w-100 text-center border-bottom border-dark'>Home</h1>
    <div className=''>
    {postComponents}
    </div>
    </div>
  );
};

export default Home;
