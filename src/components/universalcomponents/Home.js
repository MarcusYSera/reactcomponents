import React from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './Dropdown';
import RadioButton from './RadioButton';
import DatePickerMonthYear from './DatePickerMonthYear';

const Home = () => {
  return (
    // <div>
    <div className="ui four column centered grid">
      <div className="row" />
      <div className="four column centered row">
        <div className="column" />
        <div className="column">
          <Link to="/reactcomponenthome">Switch to React Component</Link>
        </div>
        <div className="column">
          <h1>Dropdown</h1>
          <Dropdown />
        </div>
        <div className="column">
          <h1>Radio Button</h1>
          <RadioButton />
        </div>
        <div className="column">
          <h1>Date Picker w/Month Year</h1>
          <DatePickerMonthYear />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Home;
