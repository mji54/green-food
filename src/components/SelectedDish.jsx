import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Col, Row, Table, Thumbnail, Button } from 'react-bootstrap';

import '../css/selected.css';
import TopNav from './TopNav';

const mapStateToProps = state => {
  return { dish: state.dish };
}

const MENU = [
  {
    id: 1,
    type: 'Pancake',
    dishes: [
      "Organic Pancakes with Fresh Berries",
      "Old-Fansioned Pancakes"
    ]
  },
  {
    id: 2,
    type: 'Salad',
    dishes: [
      "Organic Quiona and Lentil Salad",
      "Organic Chef's Salad",
      "Organic Fresh Herb Salad"
    ]
  },
  {
    id: 3,
    type: 'Sandwich',
    dishes: [
      "Organic Egg Salad Sandwich",
      "Organic Sandwich Cookies"
    ]
  },
]

// const gridInstance = (
//   <Grid fluid>
//     <Row className="show-grid">
//       <TopNav />
//       <Col xs={12} md={12} className="dish-table">
//         <Table responsive>
//           <thead>
//             <tr>
//               <th>Table heading</th>
//               <th>Table heading</th>
//               <th>Table heading</th>
//               <th>Table heading</th>
//               <th>Table heading</th>
//               <th>Table heading</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//             </tr>
//             <tr>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//             </tr>
//             <tr>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//               <td>Table cell</td>
//             </tr>
//           </tbody>
//         </Table>
//
//       </Col>
//     </Row>
//   </Grid>
// );

// 1. get how many dishes for the chosen type
// 2. change md = {#} accordingly; 12/# of dishes



const dish = function(index) {
  return (
    MENU.map(el => {
      if (el.id === index) {
        var num = 12/el.dishes.length;
        return (
          el.dishes.map((each, i) => {
            console.log(el.id + "-" + i);
            console.log(each);
            return (
              <div className="dish" key={el.id + "-" + i}>
                <Col xs={6} md={num} pullLeft>
                  <Thumbnail src={require("../img/popup-meal-" + el.id + ".jpg")} alt="242x200">
                    <h3>{each}</h3>
                    <p>{el.type}</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Col>
              </div>
            )
          })
        )
        // return (
        //   <div className="dish" key={el.id}>
        //     <Col xs={6} md={4}>
        //       <Thumbnail src={require("../img/popup-meal-" + el.id + ".jpg")} alt="242x200">
        //         <h3>{el.dishes.join()}</h3>
        //         <p>{el.type}</p>
        //         <p>
        //           <Button bsStyle="primary">Button</Button>&nbsp;
        //           <Button bsStyle="default">Button</Button>
        //         </p>
        //       </Thumbnail>
        //     </Col>
        //   </div>
        // )
      }
    })
  );
}

class SelectedDish extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="show-grid">
            <TopNav />
            <div className="space"></div>
            <div className="display-flex dish-display">
              {
                this.props.dish === -1 ? "": dish(this.props.dish)
              }
            </div>
          </Row>
        </Grid>

      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(SelectedDish));
