import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Register from './register/Register';

class App extends Component {
  handleChanges = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup'
            render={props => (
              <Register
                {...props}
                handleChanges={this.handleChanges}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
