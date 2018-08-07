import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateObject, checkValidity } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input';

class EditShow extends Component {
  state = { 
    controls: {
      act: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ACT NAME'
        },
      value: '',
      validation: {
        required: 'true',
      },
      valid: false,
      touched: false,
      },
      date: {
        elementType: 'input',
        elementConfig: {
          type: 'date',
          placeholder: 'DATE'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
      time: {
        elementType: 'input',
        elementConfig: {
          type: 'time',
          placeholder: 'TIME'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
      venue: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'VENUE'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'CITY'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
      website: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'website'
        },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      },
    },
    added: false,
   }
  
   inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      })
    });
    this.setState({controls: updatedControls})
  }

  submitHandler = (event) => {
    event.preventDefault();
    const show = {
      act: this.state.controls.act.value,
      date: this.state.controls.date.value,
      time: this.state.controls.time.value,
      venue: this.state.controls.venue.value,
      city: this.state.controls.city.value,
      website: this.state.controls.website.value,
    }
    this.props.onEditShow(this.props.show.id, show);
    this.props.history.push('/music')
  }

  editShowCancelled = () => {
    this.props.history.goBack();
  }
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    const form = formElementsArray.map(formElement => (
      <Input 
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ))

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Danger" clicked={this.editShowCancelled}>CANCEL</Button>
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    show: state.gigs.shows.find(show => show.id === ownProps.match.params.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditShow: (id, showData) => dispatch(actions.editShow(id, showData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditShow);