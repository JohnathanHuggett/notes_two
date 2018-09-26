import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions';

import { Col, Button } from 'reactstrap';
import styled from 'styled-components';
import './navbar.css';

const H1 = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 0.85;
  opacity: 0.8;
`;

const NavBar = ({ logout }) => {
  return (
    <Col xs="3" className="Background-Grey">
      <H1>Lambda Notes</H1>
      <Fragment>
        <Link className="Link" to="/">
          <Button className="Button" size="lg" block>
            Your Notes
          </Button>
        </Link>
        <Link className="Link" to="/newnote">
          <Button className="Button" size="lg" block>
            + Create Note
          </Button>
        </Link>

        <Link className="Link" to="/">
          <Button onClick={logout} className="Button" size="lg" block>
            Logout
          </Button>
        </Link>
      </Fragment>
    </Col>
  );
};

export default connect(
  null,
  { logout }
)(NavBar);
