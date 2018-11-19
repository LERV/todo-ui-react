import React, { Component } from 'react';
import './item.css';

class NewItem extends Component {
  render() {
    let { date, checked, item } = this.props;
    return (
      <div className=" item">
        <div className="d-flex justify-content-start">
          <div>{'08/08/2018'}</div>
          <div className="mr-5 ml-5">{checked}</div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
