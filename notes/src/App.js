import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Route } from 'react-router-dom';

import Auth from './components/Authenication/Auth';
import NavBar from './components/NavBar/NavBar';
import NotesList from './components/NotesView/NotesList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="Container">
        <Row className="Background">
          <NavBar />
          <Route exact to="/" component={NotesList} />
        </Row>
      </Container>
    );
  }
}

export default Auth(App);
