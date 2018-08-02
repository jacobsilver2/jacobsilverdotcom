import React from 'react';
import classes from './CalendarEvent.css'
import Moment from 'react-moment';

const PetesCalendarEvent = ({title, startTime, date, key}) => (
  <div className={classes.Event}>
    <p> <Moment format="MMM D, YYYY">{date}</Moment></p>
    <p>{title}</p>
  </div>
);

export default PetesCalendarEvent;

