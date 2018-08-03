import React from 'react';
import MusicGig from './MusicGig/musicGig'

const musicGigs = ({shows}) => {
  const gigs = shows.map(show => {
    return <MusicGig key={show.id} act={show.act} date={show.date} time={show.time} city={show.city} website={show.website} venue={show.venue}/>
  })
  
  return (
    <div>
      {gigs}
    </div>
  )
};

export default musicGigs;