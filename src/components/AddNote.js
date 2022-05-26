import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";
import {addNoteAction} from "../action/actions";
import {useDispatch} from "react-redux";

const AddNote =(props) => {
console.log(props)
const dispatch = useDispatch();
const [title, setTitle] = useState("");
const [note, setNote]= useState("");

  

   const handleSubmit = (e) => {
        e.preventDefault();
        let newNote = {
            id: uuid(),
            title: title,
            note: note,
        }
        dispatch(addNoteAction(newNote));
        props.addNote(newNote);
        setTitle("");
        setNote("");
    };   
        
    //
    
    return (

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Note Title" 
           value={title} onChange={(e)=>{setTitle(e.target.value);}} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Notes</Form.Label>
          <Form.Control type="text" placeholder="Note description" name="note"
          height="20rem" value={note} onChange={(e)=>{setNote(e.target.value);}} />
        </Form.Group>
          
        <Button variant="primary" type="submit">
          Add Note
        </Button>
      </Form>
        );
    }


    const sendActionAsProps = {
        createNote: addNoteAction,
      };
      
      export default connect(null, sendActionAsProps)(AddNote);
