import React, { Component } from 'react';
import classes from './ContentContainer.css';
import Button from '../../components/UI/Button/Button';
import CodingResume from '../../components/Coding/CodingResume/CodingResume'



class ContentContainer extends Component {
  state = {
    buttonIsClicked: false,
  }

  buttonClicked = () => {
    this.setState({buttonIsClicked: true})
  }

  render() {
    //? map through the array of props.buttons and make a bunch of buttons
    const buttons = this.props.buttonInfo.map(buttonText => (
       <Button key={buttonText} clicked={this.buttonClicked}><CodingResume /></Button>
    )
  )

  const renderButtons = this.state.buttonIsClicked ? <CodingResume /> : this.props.copy


    return (
      <div className={classes.Container}>
        <div className={classes.Left}>
          {renderButtons}
        </div>
        <div className={classes.Right}>
          {buttons}
        </div>
      </div>
    );
  }
}

export default ContentContainer;