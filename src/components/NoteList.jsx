import React from 'react';
import {Container, Row} from 'react-bootstrap';
import {connect, useSelector} from 'react-redux'
import Note from './Note';

const NoteList = () => {
    const users = useSelector ((state) => {
      return state.users;
    })
    return (
      <Container>
        <Row>
          {users.map((note, index) => {
            return <Note note={note} key={note.id} />;
          })}
         </Row>
      </Container>
   );


};

export default NoteList;