import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import Popup from './Popup';
import Icon from './Icon';

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
  return content[index-1];
}

const popupMeal = index => {
  if (index < 1 || index > 3) return;
  return  <Image className="popup-img" src={require("../img/popup-meal-" + index + ".jpg")} circle />
}

class Bubble extends Component {

  constructor(props) {
    super(props);

    console.log("BUBBLE constructor");

    this.state = {
      time: 2000, // ideal time for each popup
      delay: 600, // transition delay time for each popup
      popupIndex: -2, // # of timeout to wait before start showing dishes
      display: false,
      hidden: "hidden",
      icon: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { popupIndex } = this.state;
      if (popupIndex < 4) {
        this.setState({popupIndex: popupIndex + 1});
        if (this.state.popupIndex === 1) {
          this.setState({display: true});
        } else if (this.state.popupIndex === 4) {
          this.setState({display: false});
          this.setState({icon: true});
        }
      }
    }, (this.state.time + this.state.delay)); // delay is total display time for each popup
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time, popupIndex, delay, display, icon } = this.state;

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

export default withRouter(Bubble);
