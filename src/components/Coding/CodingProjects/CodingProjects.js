import React from 'react';
import CodingProject from './CodingProject/CodingProject';
import * as constants from './CodingProject/CodingProjectConstants';
import classes from './CodingProjects.css';

const CodingProjects = () => (
  <div className={classes.Container}>
    <div className={classes.Item}>
      <CodingProject name={constants.EVENT_TRACKER_TITLE} desc={constants.EVENT_TRACKER_DESCRIPTION} features={constants.EVENT_TRACKER_FEATURES} gitURL={constants.EVENT_TRACKER_GITHUB}/>
    </div>
    <div className={classes.Item}>
      <CodingProject name={constants.SHOWKEEPER_TITLE} desc={constants.SHOWKEEPER_DESCRIPTION} features={constants.SHOWKEEPER_FEATURES} gitURL={constants.SHOWKEEPER_GITHUB}/>
    </div>
    <div className={classes.Item}>
      <CodingProject name={constants.VINTAGE_BASS_DATABASS_TITLE} desc={constants.VINTAGE_BASS_DATABASS_DESCRIPTION} features={constants.VINTAGE_BASS_DATABASS_FEATURES} gitURL={constants.VINTAGE_BASS_DATABASS_GITHUB}/>
    </div>
  </div>
);

export default CodingProjects;