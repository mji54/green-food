import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import '../css/footer.css';

class Footer extends Component {

  render() {
    return (
      <Col xs={12} md={12} xsHidden className="footer">
        <Col xs={11} md={11} className="footer-content">
          <Col xs={3} md={3} className="footer-logo">
            <a className="footer-logo-wrapper" href="/">
              <img src={require("../img/cn-logo-footer.svg")} alt="cn-logo-footer" />
            </a>
          </Col>
        </Col>
      </Col>
    )
  }
}

export default withRouter(Footer);
