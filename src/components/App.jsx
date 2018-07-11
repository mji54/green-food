import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Row, Col, FormControl, Checkbox } from 'react-bootstrap';

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
            <Link to={"restaurant/"} className="clear-link">
              <h2>{el.name}</h2>
            </Link>
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
      <div className="app-row">
        {gridInstance}
        <Bubble />
      </div>
    )
  }
}

export default withRouter(App);
