import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { firebase } from '@firebase/app';
// import 'firebase/firestore';
import { Route, withRouter } from 'react-router-dom';

// import AddGoal from './AddGoal'
import Header from './Header';

// require('firebase/auth');

class App extends Component {
  // signOut() {
  //   firebase.auth().signOut();
  // }

  render() {
    return (
      <div>
        <Header />
        Home page
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default withRouter(connect(mapStateToProps, null)(App));
