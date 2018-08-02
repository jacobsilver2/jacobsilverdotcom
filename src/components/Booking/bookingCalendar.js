import React from 'react';
import CalendarEvent from './CalendarEvent/CalendarEvent'
import Spinner from '../UI/Spinner/Spinner';

const bookingCalendar = ({events, loading}) => {
  let shows = <Spinner />
  console.log(loading)
  console.log(events)
  if (!loading) {
    shows = events.map(event => <CalendarEvent key={event.id} title={event.title} startTime={event.doors_at} date={event.starts_at}/>)
  }

  return (
  <div>
    {shows}
  </div>
  
)};

export default bookingCalendar;