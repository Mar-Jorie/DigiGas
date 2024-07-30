import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/User.css';
import * as Icon from 'react-bootstrap-icons';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


//Cancel Button
const CancelButton = () => {
  return (
      <Button
          as={Link}
          to="/User"
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
          to="/User"
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
          <br/> Saved!</div>
        <Okclose/>
      </div>
    </div>
  </Modal>
);

const AddUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePassword = () => setShowPassword(prevState => !prevState);

  const handleConfirmClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='cardcontents'>
      <div className='usertitle'>
        <h1 className='usertitle'>Add User</h1>
      </div>
      <Row xs={1} md={1} className="g-4">
        <Card.Header as="h5" className='headerforms'>New User Information Form</Card.Header>
        <div className='headerformsContent'>
          <label className='lfname'>
            <p className='pfname'>First Name</p>
            <Form.Control size="text" className='fname' type="text" placeholder="Enter First Name" />
          </label>
          <label className='llname'>
            <p className='plname'>Last Name</p>
            <Form.Control size="text" className='lname' type="text" placeholder="Enter Last Name" />
          </label>

          <div className="position-relative lpassword">
            <Form.Label className='ppassword' htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type={showPassword ? "text" : "password"}
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter your password"
              className='password'
            />
            <span
              className="position-absolute"
              style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
              onClick={togglePassword}
            >
              {showPassword ? <Icon.EyeSlash className="eyeslash" /> : <Icon.Eye className="eyeopen" />}
            </span>
          </div>

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

export default AddUser;
