import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { firebase } from '@firebase/app';
import 'firebase/firestore';
require('firebase/auth');

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    console.log('this.state', this.state);
    // console.log('this.prop', this.props);
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        // console.log('error', error);
        this.setState({error});
      })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Sign up instead</Link></div>
      </div>
    )
  }
}

export default withRouter(SignIn);
