import React, { Component } from 'react';
import MusicGig from './MusicGig/musicGig'
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

//? PROPS: onDelete(), isAuth - boolean

class MusicGigs extends Component {

  componentDidMount() {
    this.props.onFetchShows()
  }

  render() {
    const gigs = this.props.shows.map(show => {
      return <MusicGig 
        isAuth={this.props.isAuth}
        onDelete={this.props.onDelete} 
        key={show.id} 
        act={show.act} 
        date={show.date} 
        time={show.time} 
        city={show.city} 
        website={show.website} 
        venue={show.venue} 
        id={show.id}/>
    })

    return (
      <div>
        {gigs}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shows: state.gigs.shows,
    loading: state.gigs.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchShows: () => dispatch(actions.getShows())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicGigs);




