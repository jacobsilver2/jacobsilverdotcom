import React, { Component } from 'react';
import YouTube from 'react-youtube';

// PROPS: videos

class Videos extends Component {

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
    
    const theVids = this.props.videos.map((video, i) => {
     return <YouTube 
      key={video.id}
      videoId={video.snippet.resourceId.videoId}
      opts={options}
      onReady={this.onReady}
    />
    });

    return (
      <div>
        {theVids}
      </div>
    );
  }
}

export default Videos;




  



