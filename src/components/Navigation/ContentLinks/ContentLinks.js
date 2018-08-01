import React from 'react';
import ContentLink from './ContentLink/ContentLink';

// receives each link as a prop inside of an array  props.links

const ContentLinks = (props) => {
  const links = props.links.map(link => {
    return <ContentLink link={link} />
  })

  return (
    <ul>

    </ul>
  )

};

export default ContentLinks;