import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Col, Row, Form, FormGroup, Input, Button } from 'reactstrap';

import { login } from '../../actions';

import lambdaLogo from '../../utils/logo.png';
import './login.css';

// TODO: fix font awesome color

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    const user = this.state.username;
    this.props.login(user);
    window.location.reload();
  };

  render() {
    return (
      <div className="Login-Container">
        <img className="Login-Logo" src={lambdaLogo} alt="Lambda School Logo" />
        <Row>
          <Col>
            <Form onSubmit={this.handleLoginSubmit} className="mr-4 ml-3">
              <FormGroup>
                <Row className="Login-input">
                  <Col xs="1">
                    <i className="fas fa-user-alt" />
                  </Col>
                  <Col>
                    <Input
                      onChange={this.handleInputChange}
                      value={this.state.username}
                      name="username"
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row className="Login-input">
                  <Col xs="1">
                    <i className="fas fa-lock" />
                  </Col>
                  <Col>
                    <Input
                      onChange={this.handleInputChange}
                      value={this.state.password}
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Button type="submit">Login</Button>
              <p>
                Not a member? <span>Sign up now</span>
                <i className="fas fa-long-arrow-alt-right" />
              </p>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
