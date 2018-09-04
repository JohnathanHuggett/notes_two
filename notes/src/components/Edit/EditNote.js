import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateNote } from '../../actions';

import styled from 'styled-components';

// TODO: finish HANDLE SUBMIT

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
`;

class EditNote extends Component {
  state = {
    title: '',
    content: '',
    Redirect: false,
  };

  componentDidMount() {
    this.setState({ title: this.props.note.title, content: this.props.note.content });
  }

  toggleRedirect = () => {
    this.setState({ Redirect: !this.state.Redirect });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const fields = {
      id: this.props.note.id,
      title: this.state.title,
      content: this.state.content,
    };
    this.props.updateNote(fields);
  };

  render() {
    return (
      <Col xs="9">
        {this.state.Redirect ? <Redirect to={'/'} /> : null}
        <Row>
          <Col>
            <Form
              className="mr-4 ml-3"
              onSubmit={e => {
                this.handleSubmit(e);
                this.toggleRedirect();
              }}
            >
              <H3>Edit Note:</H3>
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
              <Btn className="Button btn btn-primary btn-block" type="submit">
                Update
              </Btn>
            </Form>
          </Col>
        </Row>
      </Col>
    );
  }
}
const mapStateToProps = ({ notesReducer }) => {
  return {
    note: notesReducer.note,
  };
};
export default connect(
  mapStateToProps,
  { updateNote }
)(EditNote);
