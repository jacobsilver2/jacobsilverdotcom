import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { EVENTTRACKER, SHOWKEEPER, MUSICVENUEMANAGER, VINTAGEBASSCLI } from './demoConstants';
class Demos extends Component {

  onReady = event => {
    event.target.pauseVideo();
  }

  render() {
    const options = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div>
        <h1>Below are some demos of some various projects and automations I've worked on.</h1>
        <hr />
        <h3>EventTracker</h3>
        <YouTube videoId={EVENTTRACKER} onReady={this.onReady} opts={options}/>
        <hr />
        <h3>ShowKeeper</h3>
        <YouTube videoId={SHOWKEEPER} onReady={this.onReady} opts={options}/>
        <hr />
        <h3>Music Venue Manager</h3>
        <YouTube videoId={MUSICVENUEMANAGER} onReady={this.onReady} opts={options}/>
        <hr />
        <h3>Vintage Bass CLI</h3>
        <YouTube videoId={VINTAGEBASSCLI} onReady={this.onReady} opts={options}/>
        <hr />
      </div>
    );
  }
}

export default Demos;