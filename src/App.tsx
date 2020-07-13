import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';

import Routes from './utils/router';

function App() {
  return (
    <div className="container">
      <Routes/>
    </div>
  );
}

export default App;
