import React, { useEffect, useState } from 'react'
import { PostCard,Container } from '../components/index.js';
import appwriteService from '../appwrite/config.js';


function AllPosts() {


  const [posts,setposts]=useState([]);


  useEffect(()=>{
    // default values in queries array
      appwriteService.getPosts([]).then((allposts)=>{
        if(allposts){
        setposts(allposts.documents)
           
        }
      })
    

  },[])


/* GETPOSTS O/P
        {
            "total": 5,
            "documents": [
                {
                "$id": "abc123",
                "title": "My Post",
                "slug": "my-post",
                ...
                },
                ...
            ]
        }
*/ 



  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
      </Container>
    </div>
  )
}

export default AllPosts