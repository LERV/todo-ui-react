import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Todo from "./pages/todo"

class App extends Component {
state={
  value:'',
}

onChangeInput= e => {
  this.setState({
    value:e.target.value,

  });
};

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Todo id="inputTest" value={this.state.value} onChange={this.onChangeInput} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
