import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

import '../css/popup.css';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';
import { selectDishType } from '../actions/index';

// PROBLEM: there's delays

const mapDispatchToProps = dispatch => {
  // console.log("dispatch");
  return {
    selectDishType: index => dispatch(selectDishType(index))
  };
};

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "hidden",
      show: true,
      isMounted: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

//   state = {
//     isMounted: false,
//   };
//
// componentDidMount() {
//     this.setState({ isMounted: true }, () => {
//       if (this.state.isMounted) {
//         this.setState({ isMounted: false });
//         {
//           // do something
//           // this.props.onClick(...)
//         }
//       }
//     });
//   }

  componentWillMount() {
    this.timer = setTimeout(() => this.show(),(this.props.wait + this.props.delay)*3 + this.props.delay); // after -2, -1, 0
  }

  show() {
    console.log("start showing");
    this.setState({class : 'popup'});
  }

  componentDidMount() {
    // this.setState({ isMounted: true }, () => {
    //   if (this.state.isMounted) {
    //     console.log("is mounted");
    //     this.setState({ isMounted: false });

        this.timeout = setTimeout(() => this.hide(), (this.props.wait + this.props.delay)*6 + this.props.delay); // total popups time include transition time

        this.interval = setInterval(() => {
          this.setState({show: !this.state.show});
          setTimeout(() => this.setState({show: !this.state.show}), this.props.delay);
        }, (this.props.wait + this.props.delay));
        console.log("interval " + this.interval);
    //   }
    // })
  }

  componentWillUnmount() {
    console.log("clear interval " + this.interval);
    console.log("clear timer " + this.timer);
    console.log("clear timeout " + this.timeout);
    clearInterval(this.interval);
    clearTimeout(this.timer);
    clearTimeout(this.timeout);
  }

  hide() {
    console.log("hide");
    this.setState({class: 'hidden'});
  }

  handleClick(i) {
    console.log("dish index is " + i);
    this.props.selectDishType(i);
  }

  render() {
    return (
      <div className={this.state.class}>
        <Zoom cascade when={this.state.show}>
            <div className='popup_inner'>
                <Popover
                  id="popover-basic"
                  className="popover"
                  placement="top"
                  title={this.props.title}
                >
                  {this.props.popoverText}
                </Popover>
                <Link
                  to={'/selected'}
                  className="popup-content"
                  onClick={() => this.handleClick(this.props.index)}
                >
                  {this.props.popupImg}
                </Link>
            </div>
        </Zoom>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {}
// }

export default withRouter(connect(null, mapDispatchToProps)(Popup));
