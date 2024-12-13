import React from 'react';
import '../Post.css'
import vir from '../image/images (2).jpg'
import { useEffect, useState } from 'react';



const Post = () => {

    const [post, setPost] = useState(null);

    
useEffect(() => {
    const storedPost = localStorage.getItem('selectedPost');
    if (storedPost) {
      setPost(JSON.parse(storedPost));
    }
}, []);

  return (
    <div className='post'>
      <div className='images'>
        <img className='vir-image' src={vir} alt='not available'/>
      </div>
      <div>
        <div className='Cap'>
            <p>{post?.caption?.text || "UNKNOWN"}</p>
        </div>
        <div className='cmnt'>
            <p>ONLY ONE IS THE KING KOHLI</p>
            <p>Amazing congratulations King for great comeback</p>
            <p>Congratulations</p>
        </div>
        <div className='like'>
            <p>{post?.like_count || "UNKNOWN"}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
