import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
            <div class="row">
                <div class="ui card three wide column" >
                    <div class="image">
                        <img src="./assets/images/user.png" />
                    </div>  
                        <div class="content">
                            <a class="header">Kristy</a>
                            <div class="meta">
                                <span class="date">Joined in 2013</span>
                            </div>
                            <div class="description">
                                Kristy is an art director living in New York.
                            </div>
                        </div>
                        <div class="extra content">
                            <a>
                                <i class="user icon"></i>
                                22 Friends
                           </a>
                        </div>
                    </div>
                    <div class="ui card three wide column">
                    <div class="image">
                        <img src="./assets/images/user.png" />
                    </div>  
                        <div class="content">
                            <a class="header">Kristy</a>
                            <div class="meta">
                                <span class="date">Joined in 2013</span>
                            </div>
                            <div class="description">
                                Kristy is an art director living in New York.
                            </div>
                        </div>
                        <div class="extra content">
                            <a>
                                <i class="user icon"></i>
                                22 Friends
                           </a>
                        </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default MainPage;