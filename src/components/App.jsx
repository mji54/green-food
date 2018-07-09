import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Link } from 'react-router-dom';

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { Grid, Row, Col, Clearfix, Navbar, FormGroup, FormControl, Button, Checkbox } from 'react-bootstrap';

import '../css/app.css';
import Bubble from './Bubble';
import TopNav from './TopNav';

const dummyRestaurant = [
  {
    name: 'The Mighty Restaurant',
    type: 'American (New)',
    hours: 'opens tomorrow at 11:00AM'
  },
  {
    name: "Mike's Deli",
    type: 'Deli',
    hours: 'opens tomorrow at 9:00AM'
  },
  {
    name: 'Takoyaki Tanota',
    type: 'Asian Fusion / Japanese',
    hours: 'pickup'
  },
  {
    name: 'Cafe Dulce',
    type: 'Cafe',
    hours: 'opens today at 9:00AM',
  },
  {
    name: 'Prawn Coastal Casual',
    type: 'Seafood',
    hours: 'opens today at 11:15AM',
  },
  {
    name: 'Prime Pizza',
    type: 'Pizza / Sandwiches',
    hours: 'pickup & delivery',
  },
]

// 1/12 || 8/12 || 2/12 || 2/12
// 12
// 12
// 12 w/ dummy

const navBar = (
  <Navbar>
    <Navbar.Header className="header">
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>

)

const gridInstance = (
  <Grid fluid>
    <Row className="show-grid">
      <div className="navbar navbar-default navbar-fixed-top">
        <TopNav />

        <Col xs={12} md={12} className="search-col">
          <FormControl className="search" type="text" placeholder="Search" />
        </Col>
        <Col xs={12} md={12} className="toggle-row">
          <div>
            <Checkbox className="open-now" readOnly>
              Open Now
            </Checkbox>
          </div>
          <div>
          <Checkbox className="delivery" readOnly>
            Delivery
          </Checkbox>
          </div>
        </Col>
      </div>
      <div className="restaurant-wrapper">
        {dummyRestaurant.map( (el, i) => (
          <Col xs={12} md={12} key={i} className="restaurant">
            <h2>{el.name}</h2>
            <h4>{el.type}</h4>
            <h5>{el.hours.toUpperCase()}</h5>
          </Col>
          ))
        }
      </div>
    </Row>
  </Grid>
);

class App extends Component {

  render() {
    return (
      <div>
        {gridInstance}
        <Bubble />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default withRouter(connect(mapStateToProps, null)(App));
