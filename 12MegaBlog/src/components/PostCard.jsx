import React from 'react'
import {Link} from'react-router-dom'
import service from '../appwrite/config'
function PostCard({$id,Title,FeaturedImage}) {


  return (
    // on clicking , will navigate to the post page 
     <Link to={`/post/${$id}`}>
        {/* link:Triggers client-side navigation (no full reload) */}
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(FeaturedImage)} alt={Title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{Title}</h2>
        </div>
    </Link>
  )
}

export default PostCard