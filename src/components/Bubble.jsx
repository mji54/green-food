import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';
// import Popup from 'reactjs-popup';
// import { incrementTimer } from "../actions/index";
import Popup from './Popup';


import '../css/bubble.css';

const numOfMeals = 3;

var content = [{
  title: "Organic Pancake",
  text: "Too busy to make breakfast every morning but still want to eat healthily? This organic pancake is the perfect choice!"
}, {
  title: "Organic Salad",
  text: "The most healthy choice for you!"
}, {
  title: "Organic Sandwich",
  text: "Try a organic sandwich for a healthy change!"
}];

const contentList = index => {
  if (index < 1 || index > 3) return;
  // console.log(content[index-1]);
  return content[index-1];
}

const popupMeal = index => {
  if (index < 1 || index > 3) return;

  return  <Image className="popup-img" src={require("../img/popup-meal-" + index + ".jpg")} circle />
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  // console.log("dispatch");
  return {
  };
};

class Bubble extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time: 4000, // ideal time for each popup
      delay: 1000, // transition delay time for each popup
      popupIndex: -2, // # of timeout to wait before start showing dishes
      display: false,
      hidden: "hidden"
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { popupIndex } = this.state;
      if (popupIndex < 4) {
        console.log("increase popupIndex " + popupIndex);
        console.log("time taken " + (this.state.time + this.state.delay));
        this.setState({popupIndex: popupIndex + 1});
        if (this.state.popupIndex === 1) {
          console.log("change display");
          this.setState({display: true});
        } else if (this.state.popupIndex === 4) {
          this.setState({display: false});
        }
      }
    }, (this.state.time + this.state.delay)); // delay is total display time for each popup
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

//this.handleTime(interval, imgIndex)
  render() {
    const { time, popupIndex, delay, display } = this.state;

    return (
      <div>
        <Popup
          index = {popupIndex}
          wait={time}
          delay={delay}
          display={display}
          num = {numOfMeals}
          title = {
            popupIndex > 0 && popupIndex < 4 ?
            contentList(popupIndex).title : ""
          }
          popoverText = {
            popupIndex > 0 && popupIndex < 4 ?
            contentList(popupIndex).text : ""
          }
          popupImg = {
            popupIndex > 0 && popupIndex < 4 ?
            popupMeal(popupIndex) : ""
          }
        />
      </div>

    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bubble));
