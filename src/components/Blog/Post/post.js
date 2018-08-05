import React from 'react';
import classes from './post.css'
import Button from '../../UI/Button/Button';

const Post = ({title, content, id, edit, destroy}) => (
  <div className={classes.Post}>
    <h1>{title}</h1>
    <p>{content}</p>
    <p>{id}</p>
    <Button btnType="Success" clicked={() => edit(id)}>EDIT</Button>
    <Button btnType="Danger" clicked={() => destroy(id)}>DELETE</Button>
  </div>  
);

export default Post;