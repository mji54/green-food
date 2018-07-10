import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { Grid, Row, Col, Carousel, Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

// import createHistory from "history/createBrowserHistory";
// const history = createHistory();

class Education extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
  }

  loadArticle() {
    console.log('Idk what to do');
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({search: event.target.value.substr(0,25)});
  }

  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
            <img
              alt="900x500"
              src={require("../img/organic_food_environ.png")}
              onClick={() => this.loadArticle()}
            />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={require("../img/young_work.png")} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src={require("../img/pregnant_baby.png")} />
        </Carousel.Item>
      </Carousel>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default withRouter(connect(mapStateToProps, null)(Education));
