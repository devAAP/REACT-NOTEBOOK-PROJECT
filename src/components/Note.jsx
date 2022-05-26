import React from "react";
import {Card, CardGroup, Col, Modal, Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNoteAction, editNoteAction } from "../action/action";


const Note = (props) => {
  const user = props.user;

  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState(user.title);
  const [description, setDescription] = React.useState(user.note);


  const handleClose = () => setShow(false);
  
  const handleSubmit = () => {
    let updatedUser = {
      id: description.id,
      title: title,
      note: description,
    };
  dispatch(editNoteAction(description.id, updatedUser));

  handleClose();
};

return (
    <>
    <div> 
      <CardGroup>
      <Col md="4" style={{ marginBottom: "1rem"}}>
        <Card border="success">
          <Card.Body style={{backgroundColor:"#FBAC1D"}}>
            <Card.Subtitle className="mb-2 text-muted">
              Notebook
            </Card.Subtitle>
            <Card.Title>{user.title}</Card.Title>
            <Card.Text>
              <p>{user.description}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button variant="outline-secondary" size="sm" onClick={() => setShow(true)}>
                Edit Note
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={() => dispatch(deleteNoteAction(user.id))}>
                Delete Note
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      </CardGroup>
      </div>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{backgroundColor:"aqua"}}>
            <Modal.Title>Edit Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor:"lightgreen"}}>
            <h5>
              Title: <input 
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                placeholder="Title"
                />
            </h5>

            <h5>
              Note: <input 
              value={description}
              onChange= {(e) => setDescription(e.target.value)}
              placeholder= "Type in your notes"
              />
            </h5>

          </Modal.Body>
          <Modal.Footer style={{backgroundColor:"#6AA4B6"}}>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
            </Button>
            <Button variant="outline-primary" onClick={handleSubmit}>
            Save Changes
            </Button>
          </Modal.Footer>
        </Modal> 
        </>

);
};

  export default Note;  