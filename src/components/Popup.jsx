import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
// import Pulse from 'react-reveal/Pulse';

import '../css/popup.css';
import { Popover } from 'react-bootstrap';
import { selectDishType, resetInput } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    selectDishType: index => dispatch(selectDishType(index)),
    resetInput: () => dispatch(resetInput())
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
    this.setState({class : 'popup', show: true});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.display === false) {
      if (prevState.display !== this.state.display) {
        this.show();
        this._interval = setInterval(() => {

          this.setState({show: false});
          this._internalTimer = setTimeout(() => this.setState({show: true}), this.props.delay);
        }, (this.props.wait + this.props.delay/2));

        this._stopInterval = setTimeout(() => {

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
    clearTimeout(this._stopInterval);
    clearTimeout(this._internalTimer);
    clearInterval(this._interval);
  }

  hide() {
    this.setState({class: 'hidden'});
  }

  handleClick(i) {
    this.props.selectDishType(i);
    this.props.resetInput();
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

export default withRouter(connect(null, mapDispatchToProps)(Popup));
