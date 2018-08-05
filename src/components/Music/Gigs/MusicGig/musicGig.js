import React from 'react';
import Moment from 'react-moment';
import classes from './musicGig.css';
import Button from '../../../UI/Button/Button';

const musicGig = ({act, date, time, city, website, venue, onDelete, onEdit, id}) => (
  
  <div className={classes.Gig}>
    <a href={website}><p> <Moment format="dddd, MMMM Do YYYY">{date}</Moment> <Moment parse="HH:mm" format="h:mm a">{time}</Moment></p>
    <p>{act}</p></a>
    <p>{city}</p>
    <p>{venue}</p>
    <Button btnType="Success" clicked={() => onEdit(id)}>EDIT</Button>
    <Button btnType="Danger" clicked={() => onDelete(id)}>DELETE</Button>
  </div>
);

export default musicGig;