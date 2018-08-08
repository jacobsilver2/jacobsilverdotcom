import React from 'react';
import Moment from 'react-moment';
import classes from './musicGig.css';
import Button from '../../../UI/Button/Button';
import {Link} from 'react-router-dom';

const musicGig = ({act, date, time, city, website, venue, onDelete,id, isAuth}) => {
 
  const editDelete = isAuth ? <div><Button btnType="Success"><Link to={`/music/${id}`}>EDIT</Link></Button><Button btnType="Danger" clicked={() => onDelete(id)}>DELETE</Button></div> : null

  return (
    <div className={classes.Gig}>
    <a href={website}><p> <Moment format="dddd, MMMM Do YYYY">{date}</Moment> <Moment parse="HH:mm" format="h:mm a">{time}</Moment></p>
    <p>{act}</p></a>
    <p>{city}</p>
    <p>{venue}</p>
    {editDelete}    
  </div>
  )
};

export default musicGig;