import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Grid, Col, Row,Thumbnail, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';

import '../css/selected.css';
import '../css/responsive.css';

const mapStateToProps = state => ({
   dishes: state.dishes
})

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
    this.setState({ show: true, currentDish: title });
  }

  render() {
    var numItems = 0;
    this.props.dishes.map(meal => {
      numItems += meal.dishes.length;
    });

    return (
        <Grid fluid>
          <Row className="show-grid dish-row">
            <div className="dish-display">
              {
                this.props.dishes.length === 0 ?
                (<Col xs={12} md={12} className="no-result">
                    <span>No Results.</span>
                  </Col>)
                :
                (this.props.dishes.map(item => {
                  var num = 12/numItems;
                    return (
                    item.dishes.map(each => {
                      return (
                          <Col
                            className="thumb-col"
                            xs={num < 4 ? 4 : num}
                            md={num < 4 ? 4 : num}
                            key={item.typeId + '-' +each.id}
                          >
                            <Thumbnail className="pointer-cursor thumbnail" onClick={() => this.handleShow(each.dish)} src={require("../img/popup-meal-" + item.typeId + ".jpg")} alt="242x200">
                              <OverlayTrigger placement="top" overlay={tooltip}>
                                <strong>
                                  <p onClick={this.handleShow}>
                                    {each.dish}
                                  </p>
                                </strong>
                              </OverlayTrigger>

                              <Link to={"restaurant/"}>
                                <h4 className="restaurant-title">{each.restaurant}</h4>
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
                      )
                    })
                  )
                  })
                )
              }
            </div>
          </Row>
        </Grid>
    )
  }
}

export default withRouter(connect(mapStateToProps)(SelectedDish));
