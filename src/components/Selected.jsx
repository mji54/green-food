import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';

import '../css/selected.css';
import SelectedDish from './SelectedDish';
import TopNav from './TopNav';
import Education from './Education';
import SearchDish from './SearchDish';

const mapStateToProps = state => {
  return {};
}

class Selected extends Component {

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col className="col-container" xs={12} md={10}>
            <TopNav />
            <div className="space"></div>
            <Education />
            <SearchDish />
            <SelectedDish />
          </Col>
        </Row>
      </Grid>

    )
  }
}

export default withRouter(connect(mapStateToProps)(Selected));
