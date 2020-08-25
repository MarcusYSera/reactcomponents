import React from 'react';
import { Link } from 'react-router-dom';

import Transition from './Transition';
import MultipleSelect from './MultipleSelect';

const Home = () => {
  return (
    <div className="ui four column centered grid">
      <div className="row" />
      <div className="four column centered row">
        <div className="column">
          <Link to="/">Switch to Universal Component</Link>
        </div>
        <div className="column">
          {/* <h1>Transition</h1> */}
          <Transition />
        </div>
        <div className="column">
          <h3>Multiple Select</h3>
          <MultipleSelect />
        </div>
      </div>
    </div>
  );
};

export default Home;
