import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newitems from './containers/Newitems';
import { useSelector, useDispatch } from 'react-redux';
import {itemStates} from './containers/Newitems/types';
import { addItems } from './containers/Newitems/action';

import Routes from './utils/router';

function App() {
  return (
    <div className="container">
      <Routes/>
    </div>
  );
}

export default App;
