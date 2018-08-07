import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateObject, checkValidity } from '../../../shared/utility';
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input';
import * as actions from '../../../store/actions/index'

class EditPost extends Component {
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
    this.props.onEditPost(this.props.post.id, post)
    // this.props.onAddPost(post);
    // this.setState({added: true})
    this.props.history.push('/blog');
  }

  newPostCancelled = () => {
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
          <Button clicked={this.newPostCancelled} btnType="Danger">CANCEL</Button>
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    );
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    post: state.blog.posts.find(post => post.id === ownProps.match.params.id)
  }
}
const MapDispatchToProps = dispatch => {
  return {
    onEditPost: (id, postData) => dispatch(actions.editPost(id, postData))
  }
}



export default connect(mapStateToProps, MapDispatchToProps)(EditPost);