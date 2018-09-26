import React, { Component } from 'react';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Modal,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { addNote } from '../../actions';

import styled from 'styled-components';

const H3 = styled.h3`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 1.4rem;
  font-weight: bold;
  opacity: 0.8;
`;

const Btn = styled.button`
  width: 50%;
  height: 45px;
  background: #931d25;
  margin-left: 10px;
  color: white;
  border: 1px solid black;
  border-radius: 7px;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
`;

class CreateNote extends Component {
  state = {
    title: '',
    content: '',
    DeleteModal: false,
    Redirect: false,
  };

  toggleModal = () => {
    this.setState({ DeleteModal: !this.state.DeleteModal });
  };

  toggleRedirect = () => {
    this.setState({ Redirect: !this.state.Redirect });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const fields = {
      title: this.state.title,
      content: this.state.content,
    };

    if (this.state.content && this.state.title) {
      this.props.addNote(fields);
      this.setState({ title: '', content: '' });
      this.toggleRedirect();
    } else {
      this.toggleModal();
    }
  };

  render() {
    return (
      <Col xs="9">
        {this.state.Redirect ? <Redirect to={'/'} /> : null}
        {this.state.DeleteModal ? (
          <Modal
            className="Modal"
            isOpen={this.state.DeleteModal}
            onClose={this.toggleModal}
          >
            <p>
              Please fill out both "title" and "content"
            </p>
            <ModalButton>
              <Btn className="" onClick={this.toggleModal}>
                Ok
              </Btn>
            </ModalButton>
          </Modal>
        ) : null}
        <Row>
          <Col>
            <Form
              className="mr-4 ml-3"
              onSubmit={this.handleSubmit}
            >
              <H3>Create New Note:</H3>
              <FormGroup>
                <Input
                  onChange={this.handleChange}
                  value={this.state.title}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Note Title"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.handleChange}
                  value={this.state.content}
                  name="content"
                  type="textarea"
                  className="form-control"
                  placeholder="Note Content"
                  rows="15"
                />
              </FormGroup>
              <Btn
                className="Button btn btn-primary btn-block"
                type="submit"
              >
                Save
              </Btn>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}

// take this out once server is running
const mapStateToProps = ({ notesReducer }) => {
  return {
    notes: notesReducer.notes,
  };
};

export default connect(
  mapStateToProps,
  { addNote }
)(CreateNote);
