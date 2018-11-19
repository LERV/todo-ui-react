import React, { Component } from 'react';
import './item.css';

class Item extends Component {
  render() {
    let { date, checked, item } = this.props;
    return (
      <div className="item">
        <div className="d-flex justify-content-start">
          <div>{date}</div>
          <div className="mr-5 ml-5">{checked}</div>
          <div>{item}</div>
        </div>
      </div>
    );
  }
}

export default Item;
