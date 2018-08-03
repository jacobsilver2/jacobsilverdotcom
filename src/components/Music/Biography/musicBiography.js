import React from 'react';
import {musicBioTextP1, musicBioTextP2, musicBioTextP3} from './musicBiographyText';
import classes from './musicBiography.css';

const musicBiography = () => (
  <div className={classes.MusicBio}>
    <p>{musicBioTextP1}</p>
    <p>{musicBioTextP2}</p>
    <p>{musicBioTextP3}</p>
  </div>
);

export default musicBiography;