import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/store';
import history from '../components/common/history';

import App from '../components/common/App';
import Login from '../components/common/Login';
import Home from '../components/common/Home';
import NoMatch from '../components/common/404';
class MRoute extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/app" component={App}/>
            <Route path="/login" component={Login}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default MRoute;