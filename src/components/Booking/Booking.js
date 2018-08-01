import React, { Component } from 'react';
import classes from './Booking.css';
import Button from '../UI/Button/Button';
import { welcomeBio } from './welcomeBio';
import PetesCalendar from './PetesCalendar/petesCalendar';
import PineBoxCalendar from './PineBoxCalendar/pineBoxCalendar';

class Booking extends Component {
  state = {buttonClicked: ''}

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
        content = <PetesCalendar />
        break;
      case 'pine':
        content = <PineBoxCalendar />
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

export default Booking;
