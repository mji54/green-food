import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import { Grid, Row, Col, Clearfix, Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import Search from 'react-search';

import '../css/selected.css';
import { MENU } from "../menu";
import { updateInput, selectDishType } from '../actions/index';

// const searchBar = (
//   <Grid fluid>
//     <Row className="show-grid">
//       <Col xs={10}  sm={10} md={10} className="wrapper">
//         <FormControl className="search" type="text" placeholder="Search for an organic dish" />
//       </Col>
//       <Col xs={2}  sm={2} md={2} className="wrapper">
//         <Button className="search-btn" block>
//           SEARCH
//         </Button>
//       </Col>
//     </Row>
//   </Grid>
//
// );

const mapDispatchToProps = dispatch => {
  // console.log("dispatch");
  return {
    updateInput: input => dispatch(updateInput(input)),
    selectDishType: index => dispatch(selectDishType(index))
  };
};

const mapStateToProps = state => {
  return { input: state.input };
}

class SearchDish extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }
    this.handleSubmit.bind(this)
  }

  handleInput(event) {
    console.log(event.target.value);
    // this.setState({input: event.target.value.substr(0,25)});
    this.props.updateInput(event.target.value.substr(0,25));
  }

  handleSubmit(input) {
    let result = [];
    MENU.map(meal => {
      let dish = meal.dishes.filter(dish => {
        return dish.dish.toLowerCase().includes(input.toLowerCase()) || !input
      });
      dish.map(item => result.push(item))
    });
    console.log(result);
    // return result.length > 0 ? this.props.selectDishType(result[0].id): -1;

  }

  render() {
    const { input } = this.props;
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={10}  sm={10} md={10} className="wrapper">
            <FormControl
              className="search"
              type="text"
              value={input}
              placeholder="Search for an organic dish"
              onChange={this.handleInput.bind(this)}
            />
          </Col>
          <Col xs={2}  sm={2} md={2} className="wrapper">
            <Button
              className="search-btn"
              type="submit"
              onClick={() => this.handleSubmit(input)}
              block
            >
              SEARCH
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchDish));
