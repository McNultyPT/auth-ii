import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        department: ''
    };

    handleChanges = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const registerEndpoint = 'http://localhost:7000/api/register';

        axios
            .post(registerEndpoint, this.state)
            .then(res => {
                    const { username, password } = this.state;
                    const loginEndpoint = 'http://localhost:7000/api/login';

                    axios
                        .post(loginEndpoint, { username, password})
                        .then(res => {
                            localStorage.setItem('jwt', res.data.token);
                            this.props.history.push('/users');
                        })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username' />
                        <input 
                            name='username'
                            placeholder='Username'
                            id='username'
                            type='text'
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                    <label htmlFor='password' />
                        <input 
                            name='password'
                            placeholder='Password'
                            id='password'
                            type='text'
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                    <label htmlFor='department' />
                        <input 
                            name='department'
                            placeholder='Department'
                            id='department'
                            type='text'
                            value={this.state.department}
                            onChange={this.handleChanges}
                        />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        );
    }
}
