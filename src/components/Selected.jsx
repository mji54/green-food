import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';

import SelectedDish from './SelectedDish';
import TopNav from './TopNav';
import Education from './Education';
import SearchDish from './SearchDish';
import Footer from './Footer';

import '../css/selected.css';
import '../css/responsive.css';

class Selected extends Component {

  render() {
    return (
      <div>
        <Grid fluid className="selected-grid">
          <Row className="show-grid selected-row">
            <Col className="col-container" xs={12} md={10}>
              <TopNav />
              <div className="space"></div>
              <Education />
              <SearchDish />
              <SelectedDish />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Selected);
