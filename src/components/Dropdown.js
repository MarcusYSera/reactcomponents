import React, { Component } from 'react';

import '../global.css';

class App extends Component {
  state = { open: false };

  componentDidMount() {
    document.addEventListener('mousedown', this.clickedOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.clickedOutside);
  }

  setWrapperRef = (e) => {
    // console.log('burger menu');
    this.wrapperRef = e;
  };

  clickedOutside = (e) => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  };

  openDropDown = () => {
    const { open } = this.state;
    let answer = false;
    if (open === false) {
      answer = open === false ? true : answer;
    }
    if (open === true) {
      answer = open === true ? answer : true;
    }
    this.setState({
      open: answer,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="dropdownwrapper">
        <div className="dropdownheader">
          <i
            className="bars icon"
            onClick={this.openDropDown}
            ref={this.setWrapperRef}
          />
        </div>
        {open === true ? (
          <ul ref={this.setWrapperRef} className="dropdownlistwrapper">
            <li className="dropdownitem">contents</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default App;
