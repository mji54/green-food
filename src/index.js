import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import reducer from './reducers';
import createHistory from "history/createBrowserHistory";

import App from './components/App';
import Selected from './components/Selected'

const history = createHistory();
const store = createStore(reducer);

ReactDOM.render(

  <Provider store={store}>
    <main>
      <Router path="/" history={history}>
        <Switch>
            <Route exact path="/" render={({ match }) => <App match={match} {...this.props} />} />
            <Route exact path="/selected" component={Selected} />} />
        </Switch>
      </Router>
    </main>
  </Provider>, document.getElementById('root')
)
