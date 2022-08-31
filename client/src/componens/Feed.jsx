import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios'
import { allPost } from '../utils/api';



const Home = ({posts,handlePageChange,setCurrentPost}) => {
  console.log(posts)
  let postComponents = posts.map(e=>{
    return <Post setCurrentPost={setCurrentPost} handlePageChange={handlePageChange} info={e}/>
  })
  return (
    <div className='h-100' >
    <h1 className='w-100 text-center border-bottom border-dark'>Home</h1>
    <div className=''>
    {postComponents}
    </div>
    </div>
  );
};

export default Home;
