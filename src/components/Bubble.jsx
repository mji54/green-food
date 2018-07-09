import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';
// import Popup from 'reactjs-popup';
import { startTimer, updateTime } from "../actions/index";
import Popup from './Popup';


import '../css/bubble.css';

const popupMeal = index => (
  <Image className="popup-img" src={require("../img/popup-meal-" + index + ".jpg")} circle />
)

const mapStateToProps = state => {
  // console.log(state.bubble)
  return {
    bubble: state.bubble
   }
}

const mapDispatchToProps = dispatch => {
  // console.log("dispatch");
  return {
    startTimer: time => dispatch(startTimer(time)),
    updateTime: () => dispatch(updateTime()),
  };
};

// const mapStateToProps

class Bubble extends Component {

  constructor(props) {
    super(props)

    this.state = {
      interval: 3,
      time: 3000,
      imgIndex: [ 1, 2, 3 ],
    };
    this.handleTime = this.handleTime.bind(this);
  }


  handleTime(interval, indArray) {
    const interval_remaining = interval;
    console.log(this.props.bubble);

    // this.props.startTimer(3000);
    // console.log(this.props.bubble);
    // indArray.map(ind => (
    //
    // ))

    // console.log(this.props);
  }

  render() {
    const { interval, time, imgIndex } = this.state;

    return (
      <div>
        <Popup
          popoverText = "And here's some amazing organic healthy meal."
          popupImg = { this.handleTime(interval, imgIndex) }
        />
      </div>

    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bubble));
