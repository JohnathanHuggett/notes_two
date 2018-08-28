import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Auth from './components/Authenication/Auth';
import NavBar from './components/NavBar/NavBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="Container">
        <Row className="Background">
          <NavBar />
        </Row>
      </Container>
    );
  }
}

export default Auth(App);
