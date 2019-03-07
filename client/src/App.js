import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Register from './register/Register';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup' component={Register} />
          <Route path='/signin' component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
