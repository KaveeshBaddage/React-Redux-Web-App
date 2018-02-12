import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'


class App extends Component {
  render() {
    return (
      <React.Fragment>
            <Switch>
              <Route path="/" component={Dashboard}/>
            </Switch>
      </React.Fragment>
    );
  }
}

export default App;
