import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Link } from 'react-router-dom';
import { Grid, Col, Row, Table, Thumbnail, Button, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';

import '../css/selected.css';
import TopNav from './TopNav';
import Restaurant from './Restaurant';
import { MENU } from "../menu"

const mapStateToProps = state => {
  // instead of INDEX, this should be an ARRAY now
  return { dish: state.dish };
}

const tooltip = (
  <Tooltip id="tooltip">
    Click to order!
  </Tooltip>
);

class SelectedDish extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      currentDish: ''
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false});
  }

  handleShow(title) {
    // console.log("Handle Show " + title);
    this.setState({ show: true, currentDish: title });
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <div className="dish-display">
              {
                this.props.dish === -1 ? "":
                (
                  MENU.map(el => {
                    if (el.id === this.props.dish) {
                      var num = 12/el.dishes.length;
                      return (
                        el.dishes.map(each => {
                          return (
                            <div className="dish" key={el.id + "-" + each.id}>
                              <Col className="col-block" xs={num} md={num}>
                                <Thumbnail className="pointer-cursor" onClick={() => this.handleShow(each.dish)} src={require("../img/popup-meal-" + el.id + ".jpg")} alt="242x200">
                                  <OverlayTrigger placement="top" overlay={tooltip}>
                                    <h3
                                      onClick={this.handleShow}

                                    >
                                      {each.dish}
                                    </h3>
                                  </OverlayTrigger>

                                  <Link to={"restaurant/"}>
                                    <p className="restaurant-title">{each.restaurant}</p>
                                  </Link>

                                </Thumbnail>
                                <Modal
                                  show={this.state.show}
                                  onHide={this.handleClose}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>{ this.state.currentDish }</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <div className="dummy-content">
                                      <span>
                                        <h4>This is a dummy page.</h4>
                                        <h5><i>Directly ordering dish <strong>{this.state.currentDish}</strong> from this restaurant.</i></h5>
                                      </span>
                                    </div>
                                  </Modal.Body>
                                </Modal>
                              </Col>
                            </div>
                          )
                        })
                      )
                    }
                  })
                )
              }
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(SelectedDish));
