import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginActions } from "./../actions";
import { Header, Icon, Card, Message } from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { password: null,username:null };
  }     

  clearPassword() {
    if (this.state && this.state.password != undefined) {
      this.setState({ password: "" });
    }
  }

  handleFormSubmit({ email, password }) {
    console.log("Credential is ", email, password);
    this.props.queryStart();
    this.props.doLogin({ email, password });
    this.clearPassword();
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      console.log("Redirect to dashboard");
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      console.log("Redirect to dashboard");
      this.props.history.push("/");
    }
  }

  //Clear form filed data and error message
  clearForm = () => {
    this.clearPassword();
    this.props.reset();
    this.props.doCancel()
  };

  //Set password's valus in to local state to manage submit button active state
  handlePasswordValue = (name,value) => {
    this.setState({ password: value });
  } 

   //Set username's valus in to local state to manage submit button active state
  handleUsernameValue = (name,value) => {
    this.setState({ username: value });
  }

  render() {
    const {
      handleSubmit,
      fields: { password, email },
      logInError,
      loading
    } = this.props;

    //View error message
    let errorMsg = logInError && (
      <React.Fragment>
        <Message error header={logInError.title} content={logInError.message} />
        <button className="ui fluid large red button" onClick={this.clearForm}>
          Clear
        </button>
      </React.Fragment>
    );

    //View loading message
    let loadingMsg = loading && (
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>Just one second</Message.Header>
          We are authenticating user...
        </Message.Content>
      </Message>
    );

    return (
      <React.Fragment>
        <div
          className="ui middle aligned center aligned grid container-fluid"
          style={{
            background: "url('/assets/images/b3.jpg')",
            backgroundSize: "100%",
            height: "-webkit-fill-available",
            width: "100%",
            marginLeft: 0,
            marginTop: 1
          }}
        >
          <div
            className="ui middle aligned center aligned grid"
            style={{ marginTop: 0 }}
          >
            <div className="column" style={{ width: 500 }}>
              <Card fluid color="green" raised>
                <Card.Header>
                  <Header
                    as="h2"
                    block
                    style={{ width: "470px", color: "green" }}
                    icon
                    textAlign="center"
                  >
                    <Icon name="users" circular />
                    Sign In to XYZ
                  </Header>
                </Card.Header>
              </Card>
              <form
                className="ui large form"
                onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
              >
                <div className="ui stacked secondary  segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon" />
                      <Field
                        type="text"
                        {...email}
                        component="input"
                        name="email"
                        className="form-control"
                        id="InputEmail"
                        placeholder="Enter Email"
                        onChange={this.handleUsernameValue}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon" />
                      <Field
                        type="text"
                        {...password}
                        name="password"
                        type="password"
                        className="form-control"
                        component="input"
                        id="InputPassword1"
                        placeholder="Enter Password"
                        onChange={this.handlePasswordValue}
                      />
                    </div>
                  </div>
                  <button
                    className="ui fluid large green submit button"
                    action="submit"
                    disabled={!this.state.password || !this.state.username}
                  >
                    Sign In
                  </button>
                  <br />
                </div>
              </form>
              <div className="ui message">
                New User? <a href="#/register">Register</a>
              </div>
              {loadingMsg}
              {errorMsg}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Login = reduxForm({
  form: "signin",
  fields: ["email", "password"]
})(Login);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.isAuthenticated,
    hasError: state.login.hasError,
    logInError: state.login.error,
    loading: state.login.loading
  };
}

export default connect(
  mapStateToProps,
  loginActions
)(Login);
