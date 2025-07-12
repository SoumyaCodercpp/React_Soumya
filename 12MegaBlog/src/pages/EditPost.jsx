import React, { useEffect,useState } from 'react'
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';
import { PostForm, Container} from '../components/index.js';

function EditPost() {

  const [post,setpost]=useState([]);
  const {slug}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{

    if(slug){

      appwriteService.getPost(slug).then((cpost)=>{

      if(cpost){
        setpost(cpost)
      }

    })

    }
    else{
      navigate('/')
    }

    

  },[slug,navigate])


  return post ? (
    <div className='py-8'>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ):null
}

export default EditPost