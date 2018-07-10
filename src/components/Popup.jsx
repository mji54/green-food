import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

import '../css/popup.css';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';
import { selectDishType } from '../actions/index';

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
      show: false,
      isMounted: false,
      display: props.display
    }
    this.handleClick = this.handleClick.bind(this);
  }

  show() {
    console.log("start showing");
    this.setState({class : 'popup', show: true});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.display === false) {
      if (prevState.display !== this.state.display) {
        console.log("showing");
        this.show();
        // this._timer = setTimeout(() => this.show(), this.props.delay/2);
        // this._timer = setTimeout(() => this.setState({show: false}), this.props.wait + this.props.delay);
        this._interval = setInterval(() => {
          console.log("interval");
          this.setState({show: false});
          this._internalTimer = setTimeout(() => this.setState({show: true}), this.props.delay);
        }, (this.props.wait + this.props.delay/2));

        this._stopInterval = setTimeout(() => {
          console.log("clear");
          this.setState({show: false});
          clearTimeout(this._internalTimer);
          clearInterval(this._interval);
        }, this.props.wait * this.props.num + this.props.delay);
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.display === true) {
      if (props.display !== state.display) {
        return {
          class: 'hidden',
          show: false,
          display: props.display
        };
      }
    }

    if (props.display !== state.display) {
      return {
        display: props.display
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  componentWillUnmount() {
    // console.log("clear internal timer" + this._internalTimer);
    // console.log("clear interval " + this._interval);
    // console.log("clear timer " + this._timer);
    // console.log("clear timeout " + this._timeout);
    clearTimeout(this._stopInterval);
    clearTimeout(this._internalTimer);
    clearInterval(this._interval);
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
