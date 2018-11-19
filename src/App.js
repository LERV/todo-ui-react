import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap'; //For bootstrap

import Todo from './pages/todo';

class App extends Component {
  state = {
    value: '',
  };

  onChangeInput = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="background">
        <Todo />
      </div>
    );
  }
}

export default App;
