import React from 'react';

import Dropdown from './Dropdown';
import RadioButton from './RadioButton';
import DatePickerMonthYear from './DatePickerMonthYear';
import Animation from './Animation';

const App = () => {
  return (
    <div className="ui three column centered grid">
      <div className="four column centered row">
        <div className="column" />
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
      <div className="four column centered row">
        <div className="column" />
        <div className="column">
          <h1>Animation</h1>
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default App;
