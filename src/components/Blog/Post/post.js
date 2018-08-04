import React from 'react';
import classes from './post.css'

const Post = ({title, content}) => (
  <div className={classes.Post}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>  
);

export default Post;