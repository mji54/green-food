import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col, FormControl, Button } from 'react-bootstrap';

import '../css/selected.css';
import { MENU } from "../menu";
import { updateInput, searchResult } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    updateInput: input => dispatch(updateInput(input)),
    searchResult: index => dispatch(searchResult(index))
  };
};

const mapStateToProps = state => ({
  input: state.input
});

class SearchDish extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }
    this.handleSubmit.bind(this)
  }

  handleInput(event) {
    this.props.updateInput(event.target.value.substr(0,25));
  }

  handleSubmit(input) {
    let result = [];
    let dishes = []
    MENU.map(meal => {
      dishes = meal.dishes.filter(dish => {
        return (dish.dish.toLowerCase().includes(input.toLowerCase()) || !input)
      });
      if (dishes.length > 0) result.push({typeId: meal.id, dishes: dishes});
    });

    if (dishes.length === 0) {
      MENU.map(meal => {
        let dishBackup = [];
        meal.dishes.map(dish => {
          dish.dish.toLowerCase().split(' ').map(word => {
            if (input.toLowerCase().includes(word.toLowerCase()) || !input) dishBackup.push(dish);
          })
        });
        if (dishBackup.length > 0) result.push({typeId: meal.id, dishes: dishBackup});
      })
    }
    this.props.searchResult(result);
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
