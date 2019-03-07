import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            department: ''
        };
    }

    render() {
        return (
            <div>
                <h2>Sign Up</h2>
                <form>
                    <label htmlFor='username' />
                        <input 
                            name='username'
                            placeholder='Username'
                            id='username'
                            type='text'
                            value={this.state.username}
                            onChange={this.props.handleChanges}
                        />
                    <label htmlFor='password' />
                        <input 
                            name='password'
                            placeholder='Password'
                            id='password'
                            type='text'
                            value={this.state.password}
                            onChange={this.props.handleChanges}
                        />
                    <label htmlFor='department' />
                        <input 
                            name='department'
                            placeholder='Department'
                            id='department'
                            type='text'
                            value={this.state.department}
                            onChange={this.props.handleChanges}
                        />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        );
    }
}
