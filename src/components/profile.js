/* eslint-disable react-hooks/exhaustive-deps */
import '../App.css'
import viratImage from '../image/download (1).jpg'
import virat from '../image/images (2).jpg'
import axios from 'axios';  
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Profile() {

  const [posts,setPosts]= useState([]);
  const navigate = useNavigate();  

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=virat.kohli',
    headers: { 
      'x-rapidapi-key': '2c0ad88b82msheebe04f7c7ef750p183eddjsneb694082a404',
    'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
  };

 function fetchposts(){
  axios(config)
  .then((response) => {
    setPosts(response.data.data.items)
    console.log(response.data.data.items)

  })
  .catch((error) => {
    console.log(error);
  });
 }

 useEffect(() => {
  fetchposts();
 },[])

 function direction (number){
  if(number>=1000000){
    return(number/1000000).toFixed(1)+'M';
  }else if (number>=1000){
    return(number/1000).toFixed(1)+'K';
  }else{
    return number.tostring();
  }
 }

 function handlePostClick(postId) {
  // eslint-disable-next-line array-callback-return
  const foundPosts = posts.find((post) => {
    if(post.id===postId)return post;
  })
  localStorage.setItem('selectedPost', JSON.stringify(foundPosts));
    navigate(`/post/${postId}`);
  }

  return (
    <div className="profile">
      <header className='profile-head'>
        <div className='picture'>
          <img src={viratImage} alt='profile-pic' />
        </div>
       
        <div className='info'>
          <div className='head-part'>
            <h1 className='id-name'>Virat.Kohli</h1>
            <div className='btn'>
              <button className='followed'>Follow</button>
              <button className='message'>Message</button>
            </div>
          </div>
          <div className='detail'>
            <span>1,369 posts</span>
            <span>271M followers</span>
            <span>282 following</span>
          </div>
          <h1 className='name'>Virat Kohli</h1>
          <p className='carp'>Carpediem</p>
          <p className='follow'>Followed by <bold>abhay.sunn, adnan.mailk</bold> + 58 more</p>
        </div>
      </header>
      <section className='section'>
        {posts.map((post, index) => {
        return(
        <div className='images' key={index}>
          <img src={virat} alt='not available' />
          
          <div className="hover-overlay" onClick={() => handlePostClick(post.id)}>
                <p>Comments: {direction(post.comment_count)}</p>
                <p>Like: {direction(post.like_count)}</p>
              </div>
        </div>
        
        )
        })}
      </section>
    </div>
  );
}

export default Profile;
