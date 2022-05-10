import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'
import AddUser from './components/AddUser';
import EditUSer from './components/EditUser';

//CONTEXT
import UserState from './context/User/UserState';


function App() {
  return (
    <UserState>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:target" element={<EditUSer />} />
        </Routes>
      </Router>
    </UserState>
  );
}

export default App;
