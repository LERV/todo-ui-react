import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './pages/todo';

class App extends Component {
  state = {
    value: '',
  };

  onChangeInput = () => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          Test
          <Todo onChange={this.onChangeInput} value={this.state.value} />
        </div>
      </div>
    );
  }
}

export default App;
