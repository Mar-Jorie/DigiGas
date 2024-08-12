import React, { useState } from 'react';
import './css/ProductPrice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// Correctly importing the image
import imageupload from './assets/imageupload.png';


//Cancel Button
const CancelButton = () => {
    return (
        <Button
            as={Link}
            to="/ProdPrice"
            className="cancelbtnmodal"
        >
            Cancel
        </Button>
    );
};

//Confirm success
const Okclose = () => {
    return (
        <Button
            as={Link}
            to="/ProdPrice"
            className="okbtn"
        >
            Confirm
        </Button>
    );
};


// Confirm Button Component
const ConfirmButton = ({ onClick }) => (
    <Button
        variant="primary"
        className="confirmbtn"
        onClick={onClick}
    >
        Confirm
    </Button>
);

// Success Modal Component
const SuccessModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose} centered className="custom-modal-top">
        <div className='headermodalconfirmed'>
            <div className='titlemodalAction'>
                <div className='circle-bg'><Icon.Check className='checkicon' /></div>
                <div className='deletetitle'>Data Successfully
                    <br /> Saved!</div>
                <Okclose />
            </div>
        </div>
    </Modal>
);

const AddProd = () => {
    const [fileName, setFileName] = useState('No File Chosen');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : 'No File Chosen');
    };

    const [showModal, setShowModal] = useState(false);

    const handleConfirmClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='cardcontents'>
            <div className='usertitle'>
                <h1 className='usertitle'>Add Product Price</h1>
            </div>
            <Row xs={1} md={1} className="g-4">
                <Card.Header as="h5" className='headerforms'>New Product Information Form</Card.Header>
                <div className='headerformsContent'>
                    <label className='lfname'>
                        <p className='pfname'>Name</p>
                        <Form.Control size="text" className='fname' type="text" placeholder="Enter First Name" />
                    </label>
                    <label className='llname'>
                        <p className='plname'>Price</p>
                        <Form.Control size="text" className='price' type="number" placeholder="0.00" />
                    </label>

                    <div className="position-relative lpassword">
                        <Form.Label className='ppassword' htmlFor="inputPassword5">Description</Form.Label>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} className='description' placeholder='Enter Product Description' />
                        </Form.Group>
                    </div>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Thumbnail</Form.Label>
                        <div className="custom-file">
                            <div className='imgpreview'>
                                {/* Use the correct <img> tag and the correct path */}
                                <img src={imageupload} alt="Preview Upload" className='imagefile'/>
                            </div>
                            <div className='fileuploadimg'>
                                <p className='labelfile'>Please Upload image</p>
                                <label className="custom-file-label" htmlFor="customFile">
                                    {fileName}
                                </label>
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFile"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <div className="mb-2 groupbuttons">
                        <CancelButton />
                        <ConfirmButton onClick={handleConfirmClick} />
                    </div>
                </div>
            </Row>

            {/* Success Modal */}
            <SuccessModal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default AddProd;
