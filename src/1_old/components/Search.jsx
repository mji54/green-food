import React, { Component } from 'react';
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
// import fetch from 'isomorphic-fetch';

import { updateSearch, filterMenu } from '../actions/index.js';

import SearchResult from './SearchResult';
import Result from './Result';
import Header from './Header';

const mapStateToProps = state => {
  return { menu: state.menu.menu };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: input => dispatch(updateSearch(input)),
    filterMenu: term => dispatch(filterMenu(term))
  };
};

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: this.props.menu,
      term: '',
    }
  }

  handleInput(event) {
    this.props.updateSearch(event.target.value.substr(0,25));
    this.setState({term: event.target.value.substr(0,25)});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.filterMenu(this.state.term);
  }

  render() {
    const { menu, term } = this.props
    return (
      <div>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Search"
            value={term}
            onChange={this.handleInput.bind(this)}
          />
        </FormGroup>{' '}
        <Button
          type="submit"
          onClick={this.handleSubmit.bind(this)}
        >
          Search
        </Button>
      </div>
    )
  }
}

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
  filterMenu: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
