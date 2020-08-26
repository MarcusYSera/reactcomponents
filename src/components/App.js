import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ReactComponentHome from './reactcomponents/Home';
import UniversalComponentHome from './universalcomponents/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={UniversalComponentHome} />
      <Route path="/reactcomponenthome" component={ReactComponentHome} />
    </BrowserRouter>
  );
};

export default App;
