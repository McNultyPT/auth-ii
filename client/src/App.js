import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup' component={Register} />
          <Route path='/signin' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }
}

export default App;
