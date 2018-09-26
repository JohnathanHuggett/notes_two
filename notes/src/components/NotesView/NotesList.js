import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import Note from './Note';
import { getNotes, searchQuery } from '../../actions/';

import styled from 'styled-components';
import './notesView.css';

const H3 = styled.h3`
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Raleway Regular;
  opacity: 0.8;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  margin-top: 41px;
  text-align: center;
  padding: 1%;
`;

class NoteList extends Component {
  state = {
    searchQuery: '',
  };

  componentDidMount() {
    this.props.getNotes();
  }

  handleSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const noteSearch = this.props.notes.filter(note => {
      console.log(note);
      return (
        note.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1 ||
        note.content
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <Col xs="9" className="mb-5 pb-5 pl-5 pr-5 ">
        <Row>
          <Col xs="6">
            <H3>Your Notes:</H3>
          </Col>
          <Col xs="6">
            <Form>
              <Input
                type="text"
                placeholder="Search"
                onChange={this.handleSearch}
                value={this.state.searchQuery}
                name="searchQuery"
              />
            </Form>
          </Col>
        </Row>

        <Row className="mb-5">
          {noteSearch.map(note => (
            <Note key={`${note.id}`} note={note} />
          ))}
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = ({ notesReducer }) => {
  return {
    notes: notesReducer.notes,
  };
};

export default connect(
  mapStateToProps,
  { getNotes, searchQuery }
)(NoteList);
