import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';

import reducer from './reducers';
import createHistory from "history/createBrowserHistory";

import App from './components/App';
import Selected from './components/Selected';
import Restaurant from './components/Restaurant';

const history = createHistory();
const store = createStore(reducer);

ReactDOM.render(

  <Provider store={store}>
    <main>
      <Router path="/" history={history}>
        <Switch>
            <Route exact path="/" render={({ match }) => <App match={match} {...this.props} />} />
            <Route exact path="/selected" component={Selected} />
            <Route exact path="/restaurant" component={Restaurant} />
        </Switch>
      </Router>
    </main>
  </Provider>, document.getElementById('root')
)
