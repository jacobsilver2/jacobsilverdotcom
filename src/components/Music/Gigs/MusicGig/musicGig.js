import React from 'react';
import Moment from 'react-moment';
import classes from './musicGig.css';

const musicGig = ({act, date, time, city, website, venue}) => (
  
  <div className={classes.Gig}>
    <a href={website}><p> <Moment format="dddd, MMMM Do YYYY">{date}</Moment> <Moment parse="HH:mm" format="h:mm a">{time}</Moment></p>
    <p>{act}</p></a>
    <p>{city}</p>
    <p>{venue}</p>
  </div>
);

export default musicGig;