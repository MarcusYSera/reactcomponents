import React, { Component } from 'react';

import '../global.css';

class Dropdown extends Component {
  state = { open: false };

  clickDropdown = () => {
    const { open } = this.state;
    if (!open) {
      document.addEventListener('click', this.clickedOutside, false);
    } else {
      document.removeEventListener('click', this.clickedOutside, false);
    }
    this.setState((previous) => ({
      open: !previous.open,
    }));
  };

  clickedOutside = (e) => {
    if (this.wrapper.contains(e.target)) {
      return;
    }
    this.clickDropdown();
  };

  render() {
    const { open } = this.state;
    return (
      <div className="dropdownwrapper">
        <div
          ref={(wrapper) => {
            this.wrapper = wrapper;
          }}
        >
          <i
            role="button"
            tabIndex={0}
            className="bars icon"
            onClick={this.clickDropdown}
            onKeyDown={this.clickDropdown}
          />
          {open && (
            <ul>
              <li>item 1</li>
              <li>item 2</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
