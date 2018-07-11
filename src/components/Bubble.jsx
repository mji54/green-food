import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import Popup from './Popup';
import Icon from './Icon';

import '../css/responsive.css';

console.log("BUBBLE beginning");

const numOfMeals = 3;

var content = [{
  title: "Try Some Organic Pancake",
  text: "Too busy to make food everyday but still want to eat healthily? This organic pancake is the perfect choice!"
}, {
  title: "Try Some Organic Salad",
  text: "The most healthy choice for you!"
}, {
  title: "Try Some Organic Sandwich",
  text: "Try a organic sandwich for a healthy change!"
}];

const contentList = index => {
  if (index < 1 || index > 3) return;
  return content[index-1];
}

const popupMeal = index => {
  if (index < 1 || index > 3) return;
  return  <Image className="popup-img" src={require("../img/popup-meal-" + index + ".jpg")} circle />
}

console.log("BUBBLE 33");

class Bubble extends Component {

  constructor(props) {
    super(props);

    console.log("BUBBLE constructor");

    this.state = {
      time: 5000, // ideal time for each popup
      delay: 1000, // transition delay time for each popup
      popupIndex: 0, // # of timeout to wait before start showing dishes
      display: false,
      hidden: "hidden",
      icon: false
    };
  }

  componentDidMount() {
    console.log("BUBBLE MOUNT");
    this.interval = setInterval(() => {
      const { popupIndex } = this.state;
      if (popupIndex < 4) {
        this.setState({popupIndex: popupIndex + 1});
        if (this.state.popupIndex === 1) {
          this.setState({display: true});
        } else if (this.state.popupIndex === 4) {
          this.setState({popupIndex: 1});
          // this.setState({display: false});
          this.setState({icon: true});
        }
      }
    }, (this.state.time + this.state.delay)); // delay is total display time for each popup
  }

  componentWillUnmount() {
    console.log("BUBBLE UNMOUNT");
    clearInterval(this.interval);
  }

  render() {
    const { time, popupIndex, delay, display, icon } = this.state;
    console.log("BUBBLE RENDER");
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
      <Icon
        index = {popupIndex}
        show = {icon}
      />
      </div>
    )
  }
}

console.log("BUBBLE BEFORE EXPORT");

export default withRouter(Bubble);
