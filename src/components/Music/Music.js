import React, { Component } from 'react';
import { connect } from 'react-redux'
import classes from './Music.css';
import Button from '../UI/Button/Button';
import MusicGigs from './Gigs/musicGigs';
import MusicDiscography from './Discography/musicDiscography';
import MusicBiography from './Biography/musicBiography'
import Videos from './Videos/Videos';
import * as actions from '../../store/actions/index';
import { Redirect } from 'react-router-dom';

class Music extends Component {
  state = {buttonClicked: ''}

  componentDidMount() {
    this.props.onFetchShows();
    this.props.onFetchVideos();
  }

  bioClicked = () => {
    this.setState({buttonClicked: 'bio'})
  }

  gigsClicked = () => {
    this.setState({buttonClicked: 'gigs'})
  }

  discographyClicked = () => {
    this.setState({buttonClicked: 'discography'})
  }  

  videosClicked = () => {
    this.setState({buttonClicked: 'videos'})
  }

  handleGigDelete = (id) => {
    this.props.onDeleteShow(id, this.props.token)
    this.props.history.replace('/music')
  }
  
  render() {
    let content = null;
    switch (this.state.buttonClicked) {
      case 'gigs':
        content = <MusicGigs onDelete={this.handleGigDelete} isAuth={this.props.token} />
        break;
      case 'discography':
        content = <MusicDiscography />
        break;
      case 'videos':
        content = <Videos videos={this.props.videos}/>
        break;
      default: content = <MusicBiography />
    }

    return (
      <div className={classes.Container}>
        <div className={classes.Left}>
          {content}
        </div>
        <div className={classes.Right}>
          <Button clicked={this.gigsClicked}>Gigs</Button>
          <Button clicked={this.discographyClicked}>Discography</Button>
          <Button clicked={this.videosClicked}>Videos</Button>
        </div>
      </div>
    );    
  }
}

const mapStateToProps = state => {
  return {
    shows: state.gigs.shows,
    loading: state.gigs.loading,
    token: state.auth.token,
    videos: state.youtube.videos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShows: () => dispatch(actions.getShows()),
    onDeleteShow: (id, token) => dispatch(actions.deleteShow(id, token)),
    onFetchVideos: () => dispatch(actions.getPlaylist())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);