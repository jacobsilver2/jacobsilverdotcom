import React from 'react';
import classes from './CalendarEvent.css'
import Moment from 'react-moment';

const CalendarEvent = ({title, startTime, date}) => (
  <div className={classes.Event}>
    <p> <Moment format="MMM D, YYYY">{date}</Moment></p>
    <p>{title}</p>
  </div>
);

export default CalendarEvent;

