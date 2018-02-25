import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginActions } from './../actions';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { password: "" };
    }

    renderAlert() {
        console.log("calling render alert")
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger" >
                    <strong>Ooops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    clearPassword() {
        this.setState({ password: "" })
    }

    handleFormSubmit({ email, password }) {
        // var username = this.props.username;
        //var password = this.state.password;
        console.log("Credential is ", email, password);
        this.props.doLogin({ email, password });
        this.clearPassword()
    }

    // componentDidUpdate() {
    //     if (this.props.isAuthenticated) {
    //         console.log("Redirect to dashboard");
    //         this.props.history.push('/')
    //     }
    // }

    // componentDidMount() {
    //     if (this.props.isAuthenticated) {
    //         console.log("Redirect to dashboard");
    //         this.props.history.push('/')
    //     }
    // }




    render() {
        const { handleSubmit, fields: { password, email } } = this.props;
        return (
            <React.Fragment>
                {/* <div className="container-fluid" style={{ backgroundImage: "url('/assets/images/background.jpg')", height: "-webkit-fill-available" }}>

                    <div className="card" style={{ width: "500px", margin: "auto", padding: "20px", height: "400px", backgroundColor: "#2b2f37" }}>
                        <div>
                            <p style={{ textAlign: "center", fontSize: "60px" }}>Sign In</p>
                        </div>
                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <fieldset className="form-group">
                                <label>Email</label>
                                <Field {...email} component="input" name="email" type="text" className="form-control" id="InputEmail" placeholder="Enter Email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Password</label>
                                <Field {...password} name="password" type="password" className="form-control" component="input" id="InputPassword1" placeholder="Password" />
                            </fieldset>
                
                            <br />
                            <button action="submit" className="btn btn-primary">Sign In</button>
                        </form>

                    </div>
                </div> */}

                <div className="ui middle aligned center aligned grid" style={{ marginTop: 100 }} >
                    <div className="column" style={{ width: 500 }} >
                        <h1 className="ui image header">
                            <div className="content">
                                Sign In
                              </div>
                        </h1>
                        <form className="ui large form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <div className="ui stacked secondary  segment">
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="user icon"></i>
                                        <Field type="text"  {...email} component="input" name="email" type="text" className="form-control" id="InputEmail" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui left icon input">
                                        <i className="lock icon"></i>
                                        <Field type="text"  {...password} name="password" type="password" className="form-control" component="input" id="InputPassword1" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <button class="ui fluid large teal submit button" action="submit">Sign In</button>
                            </div>

                        </form>
                        <div class="ui message">
                            New User? <a href="#/register">Register</a>
                        </div>

                    </div>

                </div>
            </React.Fragment>
        );

    }


}


Login = reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Login);


function mapStateToProps(state) {
    return {
        isAuthenticated: state.session.isAuthenticated
    };
}

export default connect(mapStateToProps, loginActions)(Login);