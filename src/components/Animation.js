import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';

class Animation extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Animation</h1>
        <ReactCSSTransitionGroup />
      </div>
    );
  }
}

export default Animation;
