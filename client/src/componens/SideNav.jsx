import React from 'react'

export default function SideNav({getPost, handlePageChange}) {
  
  return (
    <div style={{height:"70vh"}}  className='position-fixed top-0  d-flex flex-column justify-content-evenly  p-5'><button onClick={() => handlePageChange('home')} className='w-100 rounded-pill'>Home</button>

    <button onClick={() => getPost()} className='w-100 rounded-pill'>refresh</button>

    <button onClick={() => handlePageChange('new')} className='w-100 rounded-pill'>make a post</button></div>
  )
}
