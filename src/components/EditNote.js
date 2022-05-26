
import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: props.userInfo.title,
            location: props.userInfo.note,
            id: props.userInfo.id,
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
         [e.target.name] : e.target.value
        })
    }
handleSubmit =(e) => {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
    this.setState({
        title: "",
        note: "",
    });
    this.props.closeModal();
};
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Note Title" 
           value={this.state.title} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Note</Form.Label>
          <Form.Control type="text" placeholder="Note description" name="note"
          value={this.state.note} onChange={this.handleChange} />
        </Form.Group>
          
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
        );
    }
        
    
}
export default EditNote;