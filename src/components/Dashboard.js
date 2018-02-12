import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../modules/navbar';
import Sidebar from './../modules/sidebar';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <Sidebar/>
            </div>
        )
    }
}

export default Dashboard;
