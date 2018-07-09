import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { Carousel, Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';

import Article from './Article';
import Search from './Search';

// import createHistory from "history/createBrowserHistory";
// const history = createHistory();

class Header extends Component {

  // <Carousel.Caption>
  //   <h3>First slide label</h3>
  //   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  // </Carousel.Caption>

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
      <div>
        <Carousel>
          <Carousel.Item>
              <img
                width={1984}
                height={540}
                alt="900x500"
                src={require("../img/organic_food_environ.jpg")}
                onClick={() => this.loadArticle()}
              />
          </Carousel.Item>
          <Carousel.Item>
            <img width={1984} height={540} alt="900x500" src={require("../img/young_work.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <img width={1984} height={540} alt="900x500" src={require("../img/pregnant_baby.png")} />
          </Carousel.Item>
        </Carousel>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Green Store</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
            </Nav>
            <Navbar.Form pullRight>
              <Search />
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/article" component={Article} />

      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state);
  return {}
}

export default withRouter(connect(mapStateToProps, null)(Header));
