import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newitems from './Containers/Newitems';
import { useSelector, useDispatch } from 'react-redux';
import {itemStates} from './Containers/Newitems/types';
import { addItems } from './Containers/Newitems/action';

import Routes from './utils/router';

function App() {
  return (
    <div className="container">
      <Routes/>
    </div>
  );
}

export default App;
