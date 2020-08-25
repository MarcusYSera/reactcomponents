import React, { Component } from 'react';

class DatePickerMonthYear extends Component {
  state = { bday: '', currentMonth: 0 };

  componentDidMount = (e) => {
    const today = new Date();
    const month = `${today.getFullYear().toString()}-${`0${today.getMonth() + 1}`
      .slice(-2)
      .toString()}`;
    this.setState({
      currentMonth: month,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { bday, currentMonth } = this.state;
    console.log(`bday: ${bday} current month:${currentMonth}`);
  };

  render() {
    const { bday, currentMonth } = this.state;
    return (
      <div className="field">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="bday">
            Birthday:
            <input
              type="month"
              name="bday"
              value={bday}
              max={currentMonth}
              onChange={(e) => this.setState({ bday: e.target.value })}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default DatePickerMonthYear;
