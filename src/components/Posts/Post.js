import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? 
      here I'm acutally invoking the function that is on App.js- when you pass post.id- to figure out by how much it needs to increment the likes- then increases number of likes
      
      NOTES:in Post.js, likePost gets assigned a new callback function & passes in the individual post.id. and its invoked when you click the icon in LikeSection.js*/}
      <LikeSection likePost={() =>{return likePost(post.id)}}
      numberOfLikes={post.likes} /> 
      {/* Comments also wants its props! */}
      <Comments comments = {post.comments} />

    </div>
  );
};

export default Post;
