import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Register from './register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup' component={Register} />
        </main>
      </div>
    );
  }
}

export default App;
