import React, { Component } from 'react';
import './todo.css';

import Item from '../components/item';
import ItemNew from '../components/newItem';

import moment from 'moment';

class Todo extends Component {
  state = {
    todos: [
      { id: 1, date: 'Monday, November 19th 2018, 4:59:11 pm', check: true, item: 'Buy tomatoes' },
      { id: 2, date: 'Monday, November 19th 2018, 4:59:11 pm', check: false, item: 'Buy chicken' },
    ],
    newItem: '',
  };

  onChangeInputNew = e => {
    this.setState({
      newItem: e.target.value,
    });
  };

  handleEnter = e => {
    if (e.key === 'Enter') {
      console.log('nuevo:', this.state.newItem);

      let max = this.state.todos.reduce(function(prev, current) {
        return prev.id > current.id ? prev : current;
      });
      console.log('id:', max);

      let dateWritten = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
      console.log('date', dateWritten);

      this.setState({
        todos: [...this.state.todos, { id: max.id + 1, date: dateWritten, check: true, item: this.state.newItem }],
        newItem: '',
      });
    }
  };

  render() {
    return (
      <div className="container page">
        <div className="row">
          <div className="mx-auto mt-5">
            <h1>My To-Do List</h1>
          </div>
        </div>
        <Item date="Date                           " checked="Check       " item="Tasks" />
        {this.state.todos.map(item => (
          <div key={item.id}>
            <Item date={item.date} checked="Check" item={item.item} />
          </div>
        ))}
        <div className="input">
          <input
            placeholder="New item"
            className="input--width"
            type="text"
            value={this.state.newItem}
            onChange={this.onChangeInputNew}
            onKeyPress={this.handleEnter}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
