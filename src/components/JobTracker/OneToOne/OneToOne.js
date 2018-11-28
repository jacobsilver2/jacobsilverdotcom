import React, { Component } from 'react';
import Form from "../../UI/Input/Input";
import classes from './OneToOne.css';
import axios from 'axios';

class OneToOne extends Component {

  state = {
    column1: '',
    column2: '',
    column3: '',
    column4: ''
  }
  
  handleSubmit = e => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxolRj-zJ0QyWoelvk3ej1XSfdBNAMuBLpWL61EYz6KE-xMwD0/exec';
    // const form = document.forms['submit-to-google-sheet'];
    // console.log(form)
    e.preventDefault();
    axios({
      method: 'get',
      url: scriptURL,
      params: {
         column1: this.state.column1,
         column2: this.state.column2,
         column3: this.state.column3,
         column4: this.state.column4,
       }
      }).then(function(response){
        console.log("success");
        console.log(response);
      }).catch(function(error){
        console.log("Error");
        console.log(error)
   });
  // fetch(scriptURL, { method: 'GET', body: new FormData(form)})
  //   .then(response => console.log('Success!', response))
  //   .catch(error => console.error('Error!', error.message))
  
  }

  saveToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  
  render() {
    return (
      <form id="test-form" onSubmit={this.handleSubmit} name="submit-to-google-sheet">

        <div>
          <label>Column 1</label>
          <input type="text" name="column1" placeholder="column1" value={this.state.column1} onChange={this.saveToState}/>
        </div>

        <div>
          <label>Column 2</label>
          <input type="text" name="column2" placeholder="column2" value={this.state.column2} onChange={this.saveToState}/>
        </div>

        <div>
          <label>Column 3</label>
          <input type="text" name="column3" placeholder="column3" value={this.state.column3} onChange={this.saveToState}/>
        </div>

        <div>
          <label>Column 4</label>
          <input type="text" name="column4" placeholder="column4" value={this.state.column4} onChange={this.saveToState}/>
        </div>

        <div>
          <button type="submit"id="submit-form">Submit</button>
        </div>

      </form>
    );
  }
}

export default OneToOne;