import React, { Component } from 'react';
import classes from './Music.css';
import Button from '../UI/Button/Button';
import MusicBio from './Biography/musicBiography';
import MusicGigs from './Gigs/musicGigs';
import MusicDiscography from './Discography/musicDiscography';
import { welcomeBio } from './wecomeBio';

class Music extends Component {
  state = {buttonClicked: ''}

  bioClicked = () => {
    this.setState({buttonClicked: 'bio'})
  }

  gigsClicked = () => {
    this.setState({buttonClicked: 'gigs'})
  }

  discographyClicked = () => {
    this.setState({buttonClicked: 'discography'})
  }  
  
  render() {
    let content = null;
    switch (this.state.buttonClicked) {
      case 'bio':
        content = <MusicBio />
        break;
      case 'gigs':
        content = <MusicGigs />
        break;
      case 'discography':
        content = <MusicDiscography />
        break;
      default: content = welcomeBio;
    }

    return (
      <div className={classes.Container}>
        <div className={classes.Left}>
          {content}
        </div>
        <div className={classes.Right}>
          <Button clicked={this.bioClicked}>Bio</Button>
          <Button clicked={this.gigsClicked}>Gigs</Button>
          <Button clicked={this.discographyClicked}>Discography</Button>
        </div>
      </div>
    );    
  }
}

export default Music;