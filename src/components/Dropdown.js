import React, { Component } from 'react';

import '../global.css';

class App extends Component {
  state = {};

  openDropDown = () => {
    console.log('clicked');
  };

  render() {
    return (
      <div className="dropdownwrapper">
        <div className="dropdownheader">
          <i className="bars icon" onClick={() => this.openDropDown()} />
        </div>
        <ul className="dropdownlistwrapper">
          <li className="dropdownitem">contents</li>
        </ul>
      </div>
    );
  }
}

export default App;
