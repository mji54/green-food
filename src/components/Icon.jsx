import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import '../css/icon.css';
import '../css/responsive.css';

import { Image, Popover } from 'react-bootstrap';
import { selectDishType, resetInput } from '../actions/index';


// 1. once display is false (again), after a few seconds, appear
// 2. functionality: when user clicks on the icon, goes to the search page

const mapDispatchToProps = dispatch => {
  return {
    selectDishType: index => dispatch(selectDishType(index)),
    resetInput: () => dispatch(resetInput())
  };
};

class Icon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
      class: 'hidden',
      popover: 'icon-popover',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.show !== this.state.show) {
      this.setState({class: 'icon-wrapper'});
      this._timeout = setTimeout(() => this.setState({popover: 'hidden'}), 5000);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.show !== state.show) {
      return {
        show: props.show
      }
    }
    return null;
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }

  handleClick(i) {
    this.props.selectDishType(i);
    this.props.resetInput();
  }

  render() {

    return (
      <div className={this.state.class}>
        <Zoom cascade when={this.state.show}>
            <div className='icon-inner'>
              <Popover
                id="popover-basic"
                className={this.state.popover}
                placement="left"
              >
                Click for more organic food.
              </Popover>
              <Link
                to={'/selected'}
                className="icon-content"
                onClick={() => this.handleClick(this.props.index)}
              >
                <Image className="icon-img" src={require("../img/org-icon.png")} circle />
              </Link>
            </div>
        </Zoom>
      </div>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Icon));
