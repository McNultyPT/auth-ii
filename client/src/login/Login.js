import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChanges = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  };

  handleSubmit = e => {
      e.preventDefault();
      const endpoint = 'http://localhost:7000/api/login';
      
      axios
        .post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
        }) 
  }

  render() {
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username" />
                    <input
                        name="username"
                        placeholder="Username"
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                <label htmlFor="password" />
                    <input
                        name="password"
                        placeholder="Password"
                        id="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    />
                <label htmlFor="department" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
  }
}
