import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';

import '../css/selected.css';
import SelectedDish from './SelectedDish';

const mapStateToProps = state => {
  return {};
}

class Selected extends Component {

  render() {
    return (
      <div>
        <SelectedDish />
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Selected));
