import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Modal } from 'reactstrap';
import { connect } from 'react-redux';

import { getSingleNote, deleteNote } from '../../actions';

import styled from 'styled-components';
import './singleNote.css';

const H3 = styled.h3`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 1.4rem;
  font-weight: bold;
  opacity: 0.8;
`;

const Btn = styled.button`
  width: 207px;
  height: 45px;
  margin-left: 10px;
  color: white;
  background-color: #d8d8d8
  border: 1px solid black;
  border-radius: 7px;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
`;

class SingleNote extends Component {
  state = {
    DeleteModal: false,
    Redirect: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getSingleNote(id);
  }

  toggleModal = () => {
    this.setState({ DeleteModal: !this.state.DeleteModal });
  };

  toggleRedirect = () => {
    this.setState({ Redirect: !this.state.Redirect });
  };

  render() {
    const { note } = this.props;
    return (
      <Col xs="9">
        {this.state.Redirect ? <Redirect to={'/'} /> : null}
        {this.state.DeleteModal ? (
          <Modal className="Modal" isOpen={this.state.DeleteModal} onClose={this.toggleModal}>
            <p>Are you sure you want to delete this?</p>
            <ModalButton>
              <Btn
                style={{ backgroundColor: '#931d25' }}
                onClick={() => {
                  this.props.deleteNote(note.id);
                  this.toggleRedirect();
                }}
              >
                Delete
              </Btn>
              <Btn style={{ color: 'black' }} onClick={this.toggleModal}>
                No
              </Btn>
            </ModalButton>
          </Modal>
        ) : null}
        <Row>
          <Col className="d-flex justify-content-end mr-5 mt-3">
            <Link className="Link__Note mr-2" to={`/edit`}>
              edit
            </Link>
            <Link onClick={this.toggleModal} className="Link__Note ml-2" to={`/note/${note.id}`}>
              delete
            </Link>
          </Col>
        </Row>
        <Row className="mb-5 mr-2 ml-2">
          <Col>
            <H3>{note.title}</H3>
            <p className="P__Content">{note.content}</p>
          </Col>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = ({ notesReducer }) => {
  return { note: notesReducer.note };
};

export default connect(
  mapStateToProps,
  { getSingleNote, deleteNote }
)(SingleNote);
