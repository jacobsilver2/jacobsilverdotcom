//! dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
//! components
import { welcomeBio } from './welcomeBio';
import Button from '../UI/Button/Button';
import BookingCalendar from './bookingCalendar';
//! css
import classes from './Booking.css';
//!actions
import * as actions from '../../store/actions/index';

class Booking extends Component {
  state = {buttonClicked: ''}

  componentDidMount() {
    this.props.onFetchPetesEvents();
    this.props.onFetchPineBoxEvents();
  }

  petesClicked = () => {
    this.setState({buttonClicked:'petes'});
  }

  pineBoxClicked = () => {
    this.setState({buttonClicked:'pine'});
  }

  render() {
    let content = null;
    switch (this.state.buttonClicked) {
      case 'petes':
        content = <BookingCalendar events={this.props.petesEvents} loading={this.props.loading}/>
        break;
      case 'pine':
        content = <BookingCalendar events={this.props.pineboxEvents} loading={this.props.loading}/>
        break;
      default: content = welcomeBio;
    }


    return (
      <div className={classes.Container}>
        <div className={classes.Left}>
          {content}
        </div>
        <div className={classes.Right}>
          <Button clicked={this.petesClicked}>Pete's Candy Store Calendar</Button>
          <Button clicked={this.pineBoxClicked}>Pine Box Rock Shop Calendar</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    petesEvents: state.petes.events,
    pineboxEvents: state.pinebox.events,
    loading: state.petes.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchPetesEvents: () => dispatch(actions.fetchPetesShows()),
    onFetchPineBoxEvents: () => dispatch(actions.fetchPineShows())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);

