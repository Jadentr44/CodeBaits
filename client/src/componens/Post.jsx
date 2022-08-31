import React from 'react'



export default function Post({info,handlePageChange,setCurrentPost}) {

  return (
    <div className='px-5 border-top border-bottom'>
    <div className='font-weight-bold mb-2'>name: {info.name}</div>
    <div className="row">

    <div className='col-4'>technologies: <br /> {
        info.technologies
        .map(item => <>{item}</>)
        .reduce((acc, x) => acc === null ? x : <>{acc} , {x}</>, null)
      } </div>

        <div className='col-4'>summary: <br />{info.summary}</div>

        <div className='col-4 '><button onClick={() =>{
          setCurrentPost(info._id)
          handlePageChange('post')
        } } className='rounded-pill'>see code</button></div>
    </div>
      
    
    </div>
    
  )
}
