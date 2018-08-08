import React from 'react';
import MusicGig from './MusicGig/musicGig'

const musicGigs = ({shows, onDelete, isAuth}) => {
  const gigs = shows.map(show => {
    return <MusicGig 
      isAuth={isAuth}
      onDelete={onDelete} 
      key={show.id} 
      act={show.act} 
      date={show.date} 
      time={show.time} 
      city={show.city} 
      website={show.website} 
      venue={show.venue} 
      id={show.id}/>
  })
  
  return (
    <div>
      {gigs}
    </div>
  )
};

export default musicGigs;