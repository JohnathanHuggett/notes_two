import React from 'react';
import { Col, Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Note = ({ note }) => {
  return (
    <Col className="mb-4 pl-2 pr-2" xs="4">
      <Link className="Card__Link" to={`/note/${note._id}`}>
        <Card className="Notes__Note" body>
          <CardTitle className=" Note_Title pb-2 border-bottom border-secondary">
            {note.title}
          </CardTitle>
          <CardText className="Note__Content">{note.content}</CardText>
        </Card>
      </Link>
    </Col>
  );
};

export default Note;
