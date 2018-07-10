import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Col, Row, Table, Thumbnail, Button, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';

import '../css/selected.css';
import TopNav from './TopNav';

const mapStateToProps = state => {
  return {};
}

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        This is the restaurant page
      </div>

    )
  }
}

export default withRouter(connect(mapStateToProps)(Restaurant));
