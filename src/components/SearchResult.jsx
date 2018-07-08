import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { Link, withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import Header from './Header';
import Result from './Result';

import { Menu } from '../menu';

const mapStateToProps = state => {
  return { menu: state.menu.menu };
};


class SearchResult extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menu: ''
    };
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu(category, i) {
    // console.log(category);
    return (
      <div key={i}>
        <h2>{Object.keys(category).join().toLowerCase().replace(',cheese', '').toUpperCase()}</h2>
        <div>
            {
              category.hasOwnProperty("cheese") ?
              (
                category[Object.keys(category).filter( k => k !== 'cheese')[0]].map( dish =>
                  <div key={dish.id}>
                    <h4> { dish.title.replace(/\b\w/g, l => l.toUpperCase()) } </h4>
                    <h5>${dish.price}</h5>
                    <p>{dish.description}</p>
                  </div>

                )
              ):
              (
                category[Object.keys(category)[0]].map( dish =>
                  <div key={dish.id}>
                    <h4>{dish.title.replace(/\b\w/g, l => l.toUpperCase())}</h4>
                    <h5>${dish.price}</h5>
                    <p>{dish.description}</p>
                  </div>
                )
              )
            }
        </div>
      </div>

    )

      // <div>
      //   <h2>{Object.keys(category).join()}</h2>
      // </div>
    // return (
    //   <div key={dish.id}>
    //     <h2> {dish.title} </h2>
    //     <h3> ${dish.price} </h3>
    //     <h4> keywords: {dish.keywords.join(', ')} </h4>
    //   </div>
    // )
  }

  render() {
    const { menu } = this.props
    return (
      <div className="search-result">
        <Header />
        {
          Menu.map( (category, i) =>
            this.renderMenu(category, i)
          )
        }
        <Switch>
          <Route path='/search/:id' component={Result}/>
        </Switch>
      </div>
    )
  }
}
//
// ReactDOM.render(
//   <SearchResult result = {result} />, document.getElementById('root')
// );

SearchResult.propTypes = {
  menu: PropTypes.array.isRequired
};

export default withRouter(connect(mapStateToProps)(SearchResult));
