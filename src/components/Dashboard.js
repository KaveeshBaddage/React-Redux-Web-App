import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../modules/navbar';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                Dashboard
            </div>
        )
    }
}

export default Dashboard;
