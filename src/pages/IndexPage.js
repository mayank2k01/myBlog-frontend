import React, { useEffect, useState } from 'react'
import Post from '../Post'

const IndexPage = () => {
  const [post,setPost] =useState([]);

  useEffect(()=>{
    fetch('https://myblogwebsite-2nxz.onrender.com/post').then(response=>{
      response.json().then(posts=>{
        setPost(posts)
      })
    })
  }, [])
  
  return (
    <div>
      {/* <Post></Post>
      <Post></Post>
      <Post></Post> */}
      {post.length>0&&post.map(post=>(
        <Post {...post}/>
      ))}
    </div>
  )
}

export default IndexPage
