import React, { Component } from 'react';
// import ContentContainer from '../../containers/Content/ContentContainer';
import CodingResume from '../Coding/CodingResume/CodingResume';
import CodingProjects from '../Coding/CodingProjects/CodingProjects';
import Demos from './Demos/Demos';
import Button from '../UI/Button/Button';
import classes from './Coding.css';
import { welcome } from './welcomeConstant';

class Coding extends Component {
  state = {buttonClicked: ''}

  resumeClicked = () => {
    this.setState({buttonClicked:'resume'});
  }

  projectsClicked = () => {
    this.setState({buttonClicked: 'projects'})
  }

  demosClicked = () => {
    this.setState({buttonClicked: 'demos'})
  }


  render() {
    let content = null;
    if (this.state.buttonClicked === 'resume') {
      content = <CodingResume />
    } else if (this.state.buttonClicked === 'projects') {
      content = <CodingProjects />
    } else if (this.state.buttonClicked === 'demos') {
      content = <Demos />
    } 
    else {
      content = welcome
    }


    return (
      <div className={classes.Container}>
      <div className={classes.Left}>
        <div className={classes.Welcome}>
        {content}
        </div>
      </div>
      <div className={classes.Right}>
        <Button clicked={this.resumeClicked}>Resume</Button>
        <Button clicked={this.projectsClicked}>Projects</Button>
        <Button clicked={this.demosClicked}>Demos</Button>
      </div>
    </div>
    );
  }
}

export default Coding;