import React, { Component } from 'react';
// import ContentContainer from '../../containers/Content/ContentContainer';
import CodingResume from '../Coding/CodingResume/CodingResume';
import CodingProjects from '../Coding/CodingProjects/CodingProjects';
import Button from '../UI/Button/Button';
import classes from './Coding.css';

class Coding extends Component {
  state = {clicked: false, buttonClicked: ''}

  resumeClicked = () => {
    this.setState({clicked: true, buttonClicked:'resume'});
  }

  projectsClicked = () => {
    this.setState({clicked: false, buttonClicked: 'projects'})
  }


  render() {
    let content = null;

    if (this.state.buttonClicked === 'resume') {
      content = <CodingResume />
    } else if (this.state.buttonClicked === 'projects') {
      content = <CodingProjects />
    } else {
      content = "Welcome to the coding page"
    }


    return (
      <div className={classes.Container}>
      <div className={classes.Left}>
        {content}
      </div>
      <div className={classes.Right}>
        <Button clicked={this.resumeClicked}>Resume</Button>
        <Button clicked={this.projectsClicked}>Projects</Button>
      </div>
    </div>
    );
  }
}

export default Coding;