import React, { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { editTask } from "../../Actions";
import { useDispatch } from "react-redux";


function EditTask({toDo_task}) {
    const [show, setShow] = useState(false);
    const [todo , setTodo] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const handleChange = (input) => {
        setTodo(input);
    }

    const handleClick = () => {
        // dispatching the toggle task action
        dispatch(editTask({ id: toDo_task.id , todo : todo }))
    }
   
    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" onChange={(e) => handleChange(e.target.value)} placeholder="Edit your task here..." />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask