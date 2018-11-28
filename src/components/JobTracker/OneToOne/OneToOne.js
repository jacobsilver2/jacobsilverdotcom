import React, { Component } from 'react';
import Form from "../../UI/Input/Input";
import classes from './OneToOne.css';

class OneToOne extends Component {
  
  handleSubmit = e => {
    e.preventDefault();
    console.log("you done called me");
  }

  
  render() {
    return (
      <form id="test-form" onSubmit={this.handleSubmit}>

        <div>
          <label>Column 1</label>
          <input type="text" name="Column 1" placeholder="Column 1"/>
        </div>

        <div>
          <label>Column 2</label>
          <input type="text" name="Column 2" placeholder="Column 2"/>
        </div>

        <div>
          <label>Column 3</label>
          <input type="text" name="Column 3" placeholder="Column 3"/>
        </div>

        <div>
          <label>Column 4</label>
          <input type="text" name="Column 4" placeholder="Column 4"/>
        </div>

        <div>
          <button type="submit"id="submit-form">Submit</button>
        </div>

      </form>
    );
  }
}

export default OneToOne;