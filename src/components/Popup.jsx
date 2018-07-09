import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import '../css/popup.css';
import { Grid, Col, Row, Image, Popover } from 'react-bootstrap';

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
            <Popover
              id="popover-basic"
              className="popover"
              placement="top"
              title="Organic Meal"
            >
              {this.props.popoverText}
            </Popover>
            <div className="popup-content">
              {this.props.popupImg}
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default withRouter(connect(mapStateToProps, null)(Popup));
