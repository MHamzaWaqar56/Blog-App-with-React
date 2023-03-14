import React from 'react'
import './styleitem.css';
import {Link} from 'react-router-dom'
import Chip from '../../../Common/ChipComponent/Chip';


const BlogItems = ({blog:{id , description , title , createdAt , authorName , authorAvatar , category , cover},}) => {
  return (
    <div className='blogItem-wrap'>

    <img src={cover} alt="cover" />

    <Chip lable={category} />

    <h3>{title}</h3>

    <p className='blogItem-desc'>{description}</p>

    <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>



      
    </div>
  )
}

export default BlogItems