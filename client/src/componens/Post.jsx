import React from 'react'



export default function Post({info}) {
  let techStr = info.technologies
  // info.technologies.forEach(e=>{
  //   console.log(e)
  // })
  return (
    <div className='px-5 border-top border-bottom'>
    <div className='font-weight-bold mb-2'>name: {info.name}</div>
    <div>technologies: <br /> {
        info.technologies
        .map(item => <>{item}</>)
        .reduce((acc, x) => acc === null ? x : <>{acc} , {x}</>, null)
      } </div>
    <div>summary: <br />{info.summary}</div>
    </div>
    
  )
}
