import React from 'react';
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

class Navbar extends React.Component {
    render() {
        return (
            <div className="ui inverted huge borderless fixed fluid menu">
                <a className="header item">Mi Web App</a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui small input">
                            <input placeholder="Search..." />
                        </div>
                    </div>
                    <a className="item">Dashboard</a><a className="item">Settings</a><a className="item">Profile</a><a className="item">Help</a>
                </div>
            </div>
        );
    }
}
export default Navbar;