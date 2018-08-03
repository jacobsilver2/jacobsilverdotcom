import React, { Component } from 'react';
import { connect } from 'react-redux'
import classes from './Music.css';
import Button from '../UI/Button/Button';
import MusicBio from './Biography/musicBiography';
import MusicGigs from './Gigs/musicGigs';
import MusicDiscography from './Discography/musicDiscography';
import MusicBiography from './Biography/musicBiography'
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class Music extends Component {
  state = {buttonClicked: ''}

  componentDidMount() {
    this.props.onFetchShows()
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
  
  render() {
    let content = null;
    switch (this.state.buttonClicked) {
      case 'gigs':
        content = <MusicGigs shows={this.props.shows}/>
        break;
      case 'discography':
        content = <MusicDiscography />
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
        </div>
      </div>
    );    
  }
}

const mapStateToProps = state => {
  return {
    shows: state.gigs.shows,
    loading: state.gigs.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShows: () => dispatch(actions.getShows())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);