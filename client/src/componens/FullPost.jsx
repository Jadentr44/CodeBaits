import React,{useState} from 'react'
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function FullPost({postID}) {
  const [postInfo, setPostInfo] = useState();
  const getPost = async() =>{
    await axios.get(`api/post/${postID}`).then((res) => {
        setPostInfo(res.data)
        })    
  }
  
  getPost()
  
    if(!postInfo){
      return (
        <div>waiting</div>
      )
    }else{
      return (
        <div>
          <h1>username:{postInfo.name}</h1>
          <SyntaxHighlighter language="javascript" style={docco}>
         {postInfo.code}
    </SyntaxHighlighter>

          </div>
      )
    }
    }
    
