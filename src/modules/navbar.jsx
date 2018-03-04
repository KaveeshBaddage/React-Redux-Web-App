import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route,Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
    Container,
    Header,
    Image,
    Grid,
    Card,
    Icon,
    Form,
    Button,
    Divider,
    Input, Message
} from 'semantic-ui-react';
import { loginActions } from './../actions';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);

    }

    logoutUser(){
        console.log("Calling logout")
        this.props.logout();   
    }

    componentDidUpdate() {
        if (this.props.isAuthenticated==false) {
            console.log("Redirect to login");
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
        if (this.props.isAuthenticated==false) {
            console.log("Redirect to login");
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="ui inverted huge borderless fixed fluid menu" style={{height:50}} id="navbar">
                <a className="header item">Mi Web App</a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui small input">
                            <input placeholder="Search..." />
                        </div>
                    </div>
                    <a className="item">Dashboard</a>
                    <a className="item">Settings</a>
                    <a className="item">Profile</a>
                    <a className="item" onClick={this.logoutUser} >Sign Out </a>
                         
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.Login,
        isAuthenticated: state.session.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...loginActions
    },dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
