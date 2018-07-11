import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

import '../css/icon.css';
import { Image } from 'react-bootstrap';
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
      class: 'hidden'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.show !== this.state.show) {
      this.setState({class: 'icon-wrapper'})
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

  handleClick(i) {
    this.props.selectDishType(i);
    this.props.resetInput();
  }

  render() {
    return (
      <div className={this.state.class}>
        <Zoom cascade when={this.state.show}>
            <div className='icon-inner'>
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
