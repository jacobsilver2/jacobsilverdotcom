import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { EVENTTRACKER, SHOWKEEPER, MUSICVENUEMANAGER, VINTAGEBASSCLI, EVERNOTECREATIONTOOL, EVENTBRITEEVENTCREATOR } from './demoConstants';
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
        <h3>Evernote Daily Calendar Creation Tool</h3>
        <p>This automation grabs todays iCal events from a specific calendar, and outputs the data into an html table. It then saves the file to the desktop, and imports it into a specfic Evernote notebook. </p>
        <YouTube videoId={EVERNOTECREATIONTOOL} onReady={this.onReady} opts={options}/>
        <hr />
        <h3>Eventbrite Venue Event Creation Tool</h3>
        <p>Both venues I book at use Eventbrite Venue.  Unfortunately, Eventbrite Venue doesn't have a very robust API, so I created this tool to automate the event creation process.  Once this tool is run, the event will appear on our website, and an Eventbrite event will be created, allowing customers to RSVP or purchase tickets.</p>
        <YouTube videoId={EVENTBRITEEVENTCREATOR} onReady={this.onReady} opts={options}/>
      </div>
    );
  }
}

export default Demos;