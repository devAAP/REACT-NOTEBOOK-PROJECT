import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import NoteList from './components/NoteList';
import './App.css';
import AddNote from './components/AddNote';


class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      contacts: [
        { 
          name: 'Meeting',
          email: 'There will be a Team meeting in the conference room ',
          gen: 12,
          id: "skiell9376",
        },
        {
          title: 'Physics',
          note: 'This note covers the Gravitational forces of the earth',
          id: "uis023ksq" , 
        },
        { 
          title: 'Maths',
          note: 'This is a note on algebraic math',
          id: "23789dkaiw",
        }
      ],
    }
  }

addNewNote=(note) => {
  note.id = Math.random().toString()
  this.setState({
    users: [...this.state.notes, note]
  })
}

editNote = (id, updatedUser) => {
  this.setState({
    users: this.state.users.map(user =>user.id===id ? updatedUser : user)
    })
}

deleteNote=(id) => {
  let undeletedUsers = this.state.users.filter(user => user.id !== id)
  this.setState({
    contacts: undeletedUsers
  })
}
  render(){
   
    return (
      <>
      <Container fluid style={{marginTop: '2rem'}}>
        <Row>
      <Col md='4'>
        <h4>Add Notes</h4>
        <AddNote addNote = {this.addNewNote}/>
      </Col>
      <Col>
      <h4>All Notes</h4>
      <br/>
      <NoteList usersData={this.state.contacts}
       deleteUser={this.deleteNote} 
      editUser={this.editNote}/>
      </Col>
        </Row>
      </Container>
        
      </>
    );
  }
  }
  

export default App;



