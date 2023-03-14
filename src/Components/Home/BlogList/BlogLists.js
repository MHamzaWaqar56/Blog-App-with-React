import React from 'react'
import './styleList.css'
import BlogItems from './Blogitem/BlogItems'


const BlogLists = ({blogs}) => {
  return (
    <div className='blogList-wrap'>

    {blogs.map((blog)=> (<BlogItems blog={blog}  key={blog.id}  />))}
      
    </div>
  )
}

export default BlogLists
