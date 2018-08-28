import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

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

const NavBar = props => {
  return (
    <Col xs="3" className="Background-Grey">
      <H1>Lambda Notes</H1>
      <Fragment>
        <Link className="Link" to="/notes">
          <Button className="Button" size="lg" block>
            View Your Notes
          </Button>
        </Link>
        <Link className="Link" to="/newnote">
          <Button className="Button" size="lg" block>
            + Create Your Notes
          </Button>
        </Link>

        <Link className="Link" to="/">
          <Button onClick={props.logout} className="Button" size="lg" block>
            Logout
          </Button>
        </Link>
      </Fragment>
    </Col>
  );
};

const mapStateToProps = state => {
  return state;
};
export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(NavBar)
);
