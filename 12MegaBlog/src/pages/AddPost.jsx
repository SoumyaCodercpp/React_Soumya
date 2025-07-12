import React from 'react'
import { Container,PostForm} from '../components/index.js'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            {/* no prop passed in PostForm , since new post is being created */}
            <PostForm/>
        </Container>

    </div>
  )
}

export default AddPost