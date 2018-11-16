import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
  render() {
    let {onChange, id, value}=this.props;
    return (
      <div className="todo">
      <label htmlFor="">Write:</label>
        <input type="text" id={id} onChange={onChange} /> 
        <label htmlFor="">Text given:{value}</label>
      </div>
    );
  }
}

export default Todo;
