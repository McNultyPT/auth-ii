import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Users from './users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <h1>Ministry of Magic</h1>
            <NavLink to='/signup'>Sign Up</NavLink>
            <> | </>
            <NavLink to='/signin'>Sign In</NavLink>
            <> | </>
            <NavLink to='/signup'>Employees</NavLink>
            <> | </>
            <button onClick={this.logout}>Sign Out</button>
          </nav>
        </header>
        <main>
          <Route path='/signup' component={Register} />
          <Route path='/signin' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin');
  };
}

export default withRouter(App);
