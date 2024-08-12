import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { EnvelopeFill, LockFill, EyeFill, EyeSlashFill, ExclamationCircleFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import logo from './js/assets/logo-no-name.png';
import { Modal, Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalMessage2, setModalMessage2] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setModalMessage('All fields are required');
            setModalMessage2('Please fill in both email and password.');
            setShowModal(true);
        } else {
            if (email === 'user@com' && password === 'password') {
                navigate('/card');
            } else {
                setModalMessage('Incorrect Details');
                setModalMessage2('Please enter a correct email and password.');
                setShowModal(true);
            }
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="card p-4 cardlogin" style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}>
                <div className="text-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className='logoimg'
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
                <h2 className="text-center my-4 apptitle"><span className='diginame'>DIGI</span><span className='gasname'>GAS</span></h2>
                <h4 className="mb-4 logintitle">Login</h4>
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group inptgrplog">
                            <span className="input-group-text">
                                <EnvelopeFill style={{ color: '#FFB200' }} />
                            </span>
                            <input
                                type="email"
                                className="form-control logform"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group inptgrplog">
                            <span className="input-group-text">
                                <LockFill style={{ color: '#FFB200' }} />
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control logform"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="input-group-text showhideicon" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                {showPassword ? <EyeFill /> : <EyeSlashFill />}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btnlogin">Login</button>
                </form>
                {/* Sign up link */}
                <div className="text-center mt-1">
                    <p className="mb-0 signupacc">Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
                </div>
            </div>

            {/* Modal for error messages */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center bodymodal">
                    <div className="text-warning">
                        <ExclamationCircleFill style={{ color: '#FFB200' }} className='modalexclaicon' />
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

export default Login;
