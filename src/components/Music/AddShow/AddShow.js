import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input';
import { updateObject, checkValidity } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';


class AddShow extends Component {
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
      date: this.state.controls.date.value,
      act: this.state.controls.act.value,
      time: this.state.controls.time.value,
      venue: this.state.controls.venue.value,
      city: this.state.controls.city.value,
      website: this.state.controls.website.value,
    }
    this.props.onAddShow(show);
    this.setState({added: true})
  }

  onShowCancel = () => {
    this.props.history.goBack()
  }

  render() {

    const addedRedirect = this.state.added ? <Redirect to="/music"/> : null

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
        {addedRedirect}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button clicked={this.onShowCancel}  btnType="Danger">CANCEL</Button>
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddShow: (showData) => dispatch(actions.addShow(showData))
  }
}

export default connect(null, mapDispatchToProps)(AddShow);