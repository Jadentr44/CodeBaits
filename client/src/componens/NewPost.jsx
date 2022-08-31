import React from 'react'
import axios from 'axios';
import ReactMarkdown from 'react-markdown'
import $ from 'jquery';

export default function NewPost({handlePageChange,setCurrentPost,getPost}) {
  const sendPost = () =>{
    let name = $('#userName').val(),
      summary = $("#summary").val(),
      technologies = $('#tech').val().split(" "),
      code = $('#code').val()
      
    if(!name || !summary || !technologies || !code) return

    axios.post('/api/post/', {
      name: name,
      technologies: technologies,
      summary:summary,
      code:code
    })
    .then(function (res) {
      if(res.status !== 200) return
      getPost()
      setCurrentPost(res.data._id)
      handlePageChange("post")
    })
  }
  let summary = $('#userName').val()
  return (
    <div className='vh-100' >
    <h1 className='w-100 text-center border-bottom border-dark'>New Post</h1>
    <div className=''>
    <input type="text" id='userName' placeholder='username'/><br />
    <input type="text" placeholder='technologies(single word)' id="tech" /><br />
    <input type="text" id='summary' placeholder='summary' /><br />
    
    <textarea  className='w-75' name="" id="code" cols="30" rows="10"></textarea><br />
     
    
    <button onClick={() => sendPost()}>send</button>
    </div>
    </div>
  )
}
