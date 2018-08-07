import React from 'react';
import classes from './post.css'
import Button from '../../UI/Button/Button';
import {Link} from 'react-router-dom';

const Post = ({title, content, id, destroy, redirect}) => (
  <div className={classes.Post}>
    <h1>{title}</h1>
    <p>{content}</p>
    <p>{id}</p>
    <Button btnType="Success"><Link to={`/blog/${id}`}>EDIT</Link></Button>
    <Button btnType="Danger" clicked={( ) => destroy(id)}>DELETE</Button>
  </div>  
);

export default Post;