import React, { Component } from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';
import './users.css';

class Users extends Component {
    state = {
        users: []
    };

    render() {
        return (
            <div className='employees'>
                <h2>Employees</h2>
                {this.state.users.map(user => {
                    return (
                        <div key={user.id}>
                            <h4>{user.username}</h4>
                            <p>{user.department}</p>
                        </div>
                    )
                })}
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/users').then(res => {
            console.log(res.data)
            this.setState({ users: res.data })
        });
    }
}

export default requiresAuth(Users);
