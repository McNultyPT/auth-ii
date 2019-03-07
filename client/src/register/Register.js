import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    state = {
        username: '',
        password: '',
        department: ''
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor='username' />
                        <input 
                            name='username'
                            id='username'
                            type='text'
                            value={this.state.username}
                        />
                    <label htmlFor='password' />
                        <input 
                            name='password'
                            id='password'
                            type='text'
                            value={this.state.password}
                        />
                    <label htmlFor='department' />
                        <input 
                            name='department'
                            id='department'
                            type='text'
                            value={this.state.department}
                        />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        );
    }
}
