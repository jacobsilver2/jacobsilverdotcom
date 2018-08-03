import React from 'react';
import classes from './CodingProject.css';

const CodingProject = ({name, desc, features, gitURL}) => {
  const theFeatures = features.map((feature, i) => (
    <li key={i}>{feature}</li>
  ))
  
  return (
    <div>
      <h1><a href={gitURL}>{name}</a></h1>
      <p className={classes.Description}>{desc}</p>
      <ul>
        {theFeatures}
      </ul>
      
    </div>
  )

};

export default CodingProject;