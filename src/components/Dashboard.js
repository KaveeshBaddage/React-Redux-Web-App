import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../modules/navbar';
import Sidebar from './../modules/sidebar';
import MainPage from './MainPage';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div class="ui four column grid">
                    <Navbar />
                </div>
                <div class="ui four column grid">
                    <div class="row">
                        <div class="two wide column">2</div>
                        <div class="fourteen wide column">14</div>
                    </div>
                </div> */}
                <div class="ui four column grid">
                    <div class="row">
                        <div class="column" style={{ height: 50 }}> <Navbar /></div>

                    </div>
                    <div class="row" style={{ height: 800 }}>
                        <div class="three wide column"><Sidebar/></div>
                        <div class="thirteen wide column"> 
                            <MainPage/>
                        </div>
                    </div>
                </div>


                {/* <Navbar/>
                    <Sidebar/> */}


            </React.Fragment>
        )
    }
}

export default Dashboard;
