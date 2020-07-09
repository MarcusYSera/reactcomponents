import React, { Component } from 'react';

class RadioButton extends Component {
  state = { male: false, female: false, gender: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { male, female, gender } = this.state;
    console.log(`${male} ${female} ${gender}`);
  };

  handleCheckboxChange = (e) => {
    const { target } = e;
    let value = false;
    let opposite = '';
    if (target.value === 'male') {
      value = target.value === 'male' ? target.checked : value;
      opposite = 'female';
    } else if (target.value === 'female') {
      value = target.value === 'female' ? target.checked : value;
      opposite = 'male';
    }
    this.setState({
      [target.value]: value,
      gender: target.value,
      [opposite]: false,
    });
  };

  render() {
    const { male, female } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <input
                type="radio"
                value="male"
                checked={male}
                onChange={this.handleCheckboxChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={female}
                onChange={this.handleCheckboxChange}
              />
              Female
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RadioButton;
