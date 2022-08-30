import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Feed from "./componens/Feed";
import NewPost from "./componens/NewPost";
import SideNav from "./componens/SideNav";
function App() {
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState('home')
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
    if(currentPage === 'home') return <Feed posts={postData} />

    if(currentPage === 'new') return <NewPost/>
 }

 const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className="">
      <div className="row ">
        <div className="h-auto col-2  pr-0 mb-0">
          <SideNav getPost={getPost} handlePageChange={handlePageChange}/>
        </div>

        <div className="col-8 p-0 border-end border-start border-dark ">
          {renderPage()}
        </div>

        <div className="col-2 p-0 ">panal</div>
      </div>
    </div>
  );
}

export default App;
