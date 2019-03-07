import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    state = {
        users: []
    };

    render() {
        return (
            <div>
                <h2>Ministry of Magic Employess</h2>
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

export default Users;
