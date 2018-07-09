import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { Grid, Row, Col, Clearfix, Navbar, FormGroup, FormControl, Button, Checkbox } from 'react-bootstrap';

import '../css/app.css';
import Bubble from './Bubble';

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
        <Col xs={1} md={1} className="logo">
          <a className="logo-wrapper" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 41">
              <path fill="#FD4F57" d="M28.926 26.114c-.098.1-.257.1-.355 0l-3.655-4.227a.63.63 0 0 0-.906 0 .665.665 0 0 0 0 .925l3.688 4.195a.475.475 0 0 1 0 .661.45.45 0 0 1-.647 0l-4.1-3.771a.63.63 0 0 0-.907 0 .665.665 0 0 0 0 .926l4.134 3.738c.099.1.099.263 0 .364a.247.247 0 0 1-.267.058s-2.863-1.092-4.31-2.572c-.893-.913-1.337-2.01-1.355-3.043l-.005.005c-.006-1.03.13-1.707-.732-2.609l-1.097-1.036-1.153 1.088c-.865 1.13-.664 1.888-.67 2.811l-.005-.005c-.019 1.095-.49 2.257-1.436 3.224-1.768 1.808-5.035 2.79-6.46 1.333-1.424-1.456-.466-4.8 1.302-6.608.946-.967 2.082-1.449 3.153-1.469l-.006-.005c.898-.005 1.62.18 2.673-.729l8.004-8.874a1.468 1.468 0 0 1 2.151-.048c.6.614.579 1.614-.046 2.2l-5.926 5.59.962 1.067c.878.871 1.54.733 2.543.739l-.004.005c1.01.018 2.082.473 2.975 1.386 1.453 1.486 2.513 4.403 2.513 4.403a.261.261 0 0 1-.056.278m-17.524-15.65c.553-.638 1.455-.615 1.984.05L17 15.037 15.432 17l-3.987-4.245c-.576-.61-.595-1.652-.043-2.29M37 18.671C37 8.36 28.717 0 18.5 0S0 8.36 0 18.672c0 .26.007.517.017.775-.017.826.068 2.68.92 5.107a18.691 18.691 0 0 0 3.591 6.356c2.523 3.173 6.44 6.59 12.512 9.735a3.176 3.176 0 0 0 2.92 0c6.073-3.144 9.99-6.562 12.512-9.735a18.692 18.692 0 0 0 3.59-6.355c.853-2.428.938-4.283.921-5.108.01-.258.017-.516.017-.775">
              </path>
            </svg>
          </a>
        </Col>
        <Col xs={11}  sm={7} md={7} className="location-wrapper">
          <FormControl className="location" type="text" placeholder="Location" />
        </Col>

        <Col xs={2} md={2} xsHidden className="user-col">
          <Button className="user-btn" block>
            SIGN UP
          </Button>
        </Col>
        <Col xs={2} md={2} xsHidden className="user-col user-last">
          <Button className="user-btn" block>
            LOG IN
          </Button>
        </Col>

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
