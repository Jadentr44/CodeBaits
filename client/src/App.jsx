import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Feed from "./componens/Feed";
import SideNav from "./componens/SideNav";
function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getPost = async () =>{
      const res = await axios.get('api/post/').then((res) => {
          setPostData(res.data)
          })    
    }
    getPost()
  }, []);



  return (
    <div className="">
      <div className="row ">
        <div className="h-auto col-2  pr-0 mb-0">
          <SideNav />
        </div>

        <div className="col-8 p-0 border-end border-start border-dark ">
          <Feed posts={postData} />
        </div>
        <div className="col-2 p-0 ">panal</div>
      </div>
    </div>
  );
}

export default App;
