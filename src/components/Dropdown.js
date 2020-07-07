import React, { Component } from 'react';

import '../global.css';

class App extends Component {
  state = { open: false };

  componentDidMount() {
    document.addEventListener('mouseup', this.clickedOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.clickedOutside);
  }

  setWrapperRef = (e) => {
    console.log('setWrapperRef');
    this.wrapperRef = e;
  };

  clickedOutside = (e) => {
    // console.log('clickedOutside');
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      console.log('clickingoutside triggered');
      this.setState({
        open: false,
      });
    }
  };

  openDropDown = () => {
    console.log('opendropdown');
    const { open } = this.state;
    let answer = false;
    if (open === false) {
      // answer = open === false ? true : answer;
      answer = true;
    }
    if (open === true) {
      // answer = open === true ? answer : true;
      answer = false;
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
          <i className="bars icon" onClick={this.openDropDown} />
        </div>
        {open ? (
          <ul ref={this.setWrapperRef} className="dropdownlistwrapper">
            <li className="dropdownitem">contents</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default App;
