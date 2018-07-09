import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Switch, Route } from 'react-router-dom';

import Header from './Header';

// come back to this later

class Article extends Component {

  render() {
    return (
      <div>
        <Header />
        Article Page
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   console.log('Article');
//   return {}
// }

export default withRouter((Article));
