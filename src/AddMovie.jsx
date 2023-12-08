import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const AddMovie = ({handleAdd}) => {
    const [newMovie,setNewMovie] = useState({
        title:"",
        description:"",
        rating:"",
        poster:""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const handleChange = (e) => {
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
}

    return (
    <div className='card'>
    <Button variant="outline-light" onClick={handleShow} style={{fontWeight:'bolder',fontStyle:'italic',backgroundColor:"rgb(255, 95, 175 )"}} >
    ADD Movie
    </Button>

<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title style={{color:'rgb(95, 164, 229 )',fontWeight:'bold'}}>ADD MOVIE</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Title : </Form.Label>
            <Form.Control
            type="text"
            placeholder="Add a title of serie"
            onChange={handleChange} name='title' value={newMovie.title}
            autoFocus/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Description : </Form.Label>
            <Form.Control
            type="text"
            placeholder="Add a description for the serie"
            onChange={handleChange} name='description' value={newMovie.description}
            autoFocus/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Rating :</Form.Label>
            <Form.Control
            type="number"
            placeholder="Add a rating for serie"
            onChange={handleChange} name='rating' value={newMovie.rating}
            autoFocus/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{fontWeight:'bolder'}}>Poster URL:</Form.Label>
            <Form.Control
            type="text"
            placeholder="Add URL for the serie"
            onChange={handleChange} name='poster' value={newMovie.poster}
            autoFocus/>
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
        Close
        </Button>
        <Button style={{color:"95, 164, 229 ",}} variant="primary" onClick={() => {handleAdd(newMovie);handleClose()}}>
        Save Changes
        </Button>
    </Modal.Footer>
</Modal>

</div>
)
}

export default AddMovie