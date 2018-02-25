import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/login'


class App extends Component {
  render() {
    return (
      <React.Fragment>
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Login} />
            </Switch>
      </React.Fragment>
    );
  }
}

export default App;
