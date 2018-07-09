import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
// import { firebase } from '@firebase/app';
// import 'firebase/firestore';
// import { logUser } from './actions';
import reducer from './reducers';
import createHistory from "history/createBrowserHistory";

import App from './components/App';
import SearchResult from './components/SearchResult';
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';

// require('firebase/auth');

const history = createHistory();
const store = createStore(reducer);

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDj58iBqYlI96UJplsfzwGRCq6IoHQJHRg",
//   authDomain: "green-store-d8d6b.firebaseapp.com",
//   databaseURL: "https://green-store-d8d6b.firebaseio.com",
//   projectId: "green-store-d8d6b",
//   storageBucket: "green-store-d8d6b.appspot.com",
//   messagingSenderId: "822596812936"
// };
// firebase.initializeApp(config);
//
// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     // console.log('user has signed in or up', user);
//     const { email } = user;
//     store.dispatch(logUser(email))
//     history.push('/app');
//
//   } else {
//     // console.log('user has signed out or still needs to sign in');
//     history.replace('/signin');
//   }
// });

ReactDOM.render(

  <Provider store={store}>
    <main>
      <Router exact path="/" history={history}>
        <Switch>
            <Route path="/home" render={({ match }) => <App match={match} {...this.props} />} />
            <Route path="/result" component={SearchResult} />} />
        </Switch>
      </Router>
    </main>
  </Provider>, document.getElementById('root')
)
