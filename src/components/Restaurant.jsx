import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';

import '../css/selected.css';
import '../css/responsive.css';

import TopNav from './TopNav';
import Footer from './Footer';

class Restaurant extends Component {

  render() {
    return (
      <Grid fluid>
        <Row className="show-grid restaurant-row">
          <Col className="col-container" xs={12} md={12}>
            <TopNav />
            <div className="restaurant-wrap">
              <div className="restaurant-content">
                <span><i>This is the restaurant page</i></span>
              </div>
            </div>
          </Col>
            <Footer />
        </Row>

      </Grid>

    )
  }
}

export default withRouter(Restaurant);
