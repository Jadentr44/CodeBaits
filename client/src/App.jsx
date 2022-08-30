import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componens/pages/Home';
import SideNav from './componens/SideNav';
function App() {
  return (
    <>
      <div className="row vh-100">

    <div className="col-2  p-0"><SideNav/></div>

    <div className="col-8 p-0"><Home/></div>

    <div className="col-2 p-0">panal</div>

      </div>
    </>
  );
}

export default App;
