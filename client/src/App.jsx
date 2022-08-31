import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Feed from "./componens/Feed";
import NewPost from "./componens/NewPost";
import SideNav from "./componens/SideNav";
import FullPost from "./componens/FullPost";
function App() {
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState('home')
  const [currentPost, setCurrentPost] = useState('a')
  useEffect(() => {
    
    getPost()
  }, []);

  const getPost = async() =>{
    await axios.get('api/post/').then((res) => {
        setPostData(res.data)
        console.log("post updated")
        })    
  }

 const renderPage = () =>{
    if(currentPage === 'home') return <Feed setCurrentPost={setCurrentPost} handlePageChange={handlePageChange} posts={postData} />

    if(currentPage === 'new') return <NewPost handlePageChange={handlePageChange} setCurrentPost={setCurrentPost} getPost={getPost}/>

    if(currentPage === 'post') return <FullPost postID={currentPost}/>
 }

 const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div style={{overflowX:'hidden'}}>
      <div className="row ">
        <div className="h-auto col-2  pr-0 mb-0 d-flex justify-content-center">
          <SideNav getPost={getPost} handlePageChange={handlePageChange}/>
        </div>

        <div  className="col-8 vh-100 p-0    ">
          {renderPage()}
        </div>

        <div className="text-center col-2 p-0 "><h1>Hot Post</h1></div>
      </div>
    </div>
  );
}

export default App;
