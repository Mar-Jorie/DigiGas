import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './js/assets/logo-no-name.png';
import { Modal, Button } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Signup = () => {
    const [formData, setFormData] = useState({
        category: '',
        businessName: '',
        address: '',
        email: '',
        location: '',
    });

    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalMessage2, setModalMessage2] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, businessName, address, email, location } = formData;

        // Validate fields
        if (!category || !businessName || !address || !email || !location) {
            setModalMessage('All fields are required.');
            setModalMessage2('Please fill in all the fields.');
            setShowModal(true);
            return;
        }

        setModalMessage('Registration Successful');
        setModalMessage2('Please wait for admin approval.');
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
            navigate('/login');
        }, 3000);
    };

    const handleFocus = () => setIsOpen(true);
    const handleBlur = () => setTimeout(() => setIsOpen(false), 200);

    return (
        <div className="d-flex align-items-center justify-content-center maincard">
            <div className="card p-4 signup-card">
                <div className="text-center">
                    <img src={logo} alt="Logo" className="logoimg" />
                </div>
                <h2 className="text-center my-4 apptitle">
                    <span className="diginame">DIGI</span>
                    <span className="gasname">GAS</span>
                </h2>
                <h4 className="mb-4 signuptitle">Create Account</h4>
                <form onSubmit={handleSubmit} className='formsignmain'>
                    <div className="form-group mb-3 position-relative">
                        <label htmlFor="category" className="form-label">Select Merchant Category</label>
                        <select
                            className={`form-select formsign ${isOpen ? 'open' : ''}`}
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            <option value="" className='placeholderselect'>Select Merchant Category</option>
                            <option value="sole" className='placeholderselect'>Sole</option>
                            <option value="corporation" className='placeholderselect'>Corporation</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="businessName" className="form-label">Business Name</label>
                        <input
                            type="text"
                            className="form-control formsign"
                            id="businessName"
                            name="businessName"
                            placeholder="Enter Business Name"
                            value={formData.businessName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control formsign"
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control formsign"
                            id="email"
                            name="email"
                            placeholder="Enter Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control formsign"
                            id="location"
                            name="location"
                            placeholder="Enter Location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btnsignup">Sign Up</button>
                    <div className="text-center mt-1">
                        <p className="mb-0 signupacc">Already have an account? <Link to="/login" className="signuptext">Log In</Link></p>
                    </div>
                </form>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center bodymodal">
                    <div className="text-warning">
                        <CheckCircleFill style={{ color: '#FFB200' }} className='modalexclaiconss' />
                    </div>
                    <h5 className='h5modalmsg'>{modalMessage}</h5>
                    <h6 className='h6modalmsg'>{modalMessage2}</h6>
                    <Button variant="primary" onClick={() => setShowModal(false)} className='btnconfirmclose'>
                        Confirm
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Signup;
