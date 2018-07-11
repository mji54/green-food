import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

class Education extends Component {

  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
            <img alt="900x500" src={require("../img/organic_food_environ.png")} />
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

export default withRouter(Education);
