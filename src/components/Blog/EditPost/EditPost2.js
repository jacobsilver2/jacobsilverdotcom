import React, { Component } from 'react';
import { updateObject, checkValidity } from '../../../shared/utility';
import { Redirect, Route } from 'react-router-dom';
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input';

class EditPost2 extends Component {
  state = { 
    controls: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Title'
        },
      value: '',
      validation: {
        required: 'true',
      },
      valid: false,
      touched: false,
      },
      content: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: 'Content'
        },
      value: '',
      validation: {
        required: 'true',
      },
      valid: false,
      touched: false,
      },
    },
    added: false
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
    const post = {
      title: this.state.controls.title.value,
      content: this.state.controls.content.value,
    }

    // this.props.onEditPost(this.props.editId, post);
    // this.setState({added: true})
    // this.props.history.push('/blog');
    this.props.onEdit(this.props.editId, post)
    this.setState({added: true})
  }

  editPostCancelled = () => {
    this.props.history.goBack();
  }
  
  render() {
    console.log(this.props)
    const addedRedirect = this.state.added ? <Redirect to="/blog"/> : null

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
        <h1>The ID of this post is {this.props.match.params.id}</h1>
        {addedRedirect}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button clicked={this.editPostCancelled} btnType="Danger">CANCEL</Button>
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}

export default EditPost2;