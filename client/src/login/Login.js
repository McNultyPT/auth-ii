import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

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

// getBooks = () => {
//     const endpoint =
//       'https://oer-bookr-api.herokuapp.com/books';
//     axios
//       .get(endpoint, {
//         headers: {Authorization: localStorage.getItem('jwt')}
//       })
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//             books: res.data
//         })
//       })
//       .catch(err => {
//         this.setState({ errorMessage: err.response.data.message });
//       });
//   };
