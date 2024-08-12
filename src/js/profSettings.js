import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Profilesettings.css';
import * as Icon from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import imgprofile from './assets/profilepicture.png';

const User = () => {
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [name, setName] = useState("Juan Dela Cruz");
    const [email, setEmail] = useState("juan@gmail.com");

    const handlePasswordEditClick = () => {
        setIsEditingPassword(true);
    };

    const handleCancelPasswordClick = () => {
        setIsEditingPassword(false);
    };

    const handleSavePasswordClick = () => {
        // Add your save logic here
        setIsEditingPassword(false);
    };

    const handleEditClick = (field) => {
        if (field === 'name') {
            setIsEditingName(true);
        } else if (field === 'email') {
            setIsEditingEmail(true);
        }
    };

    const handleSaveClick = (field) => {
        if (field === 'name') {
            setIsEditingName(false);
        } else if (field === 'email') {
            setIsEditingEmail(false);
        }
    };

    const handleChange = (e, field) => {
        if (field === 'name') {
            setName(e.target.value);
        } else if (field === 'email') {
            setEmail(e.target.value);
        }
    };

    return (
        <div className='cardcontents'>
            <div className='usertitle'>
                <h1 className='usertitle'>Profile Settings</h1>
            </div>
            <Row xs={1} md={2} className="g-4">
                <div className='subsmaincont'>
                    <Card className='maincard'>
                        <Card.Header as="h5" className='subsContainer'>
                            <Icon.CreditCardFill className='creditcardicon' />
                            <div className='premiumtitle'>
                                <p className='premiumtitle1'>Premium</p>
                                <p className='premiumtitle2'>Subscription Plan</p>
                            </div>
                            <div className='premiumdetails'>
                                <p className='premiumdetails1'>Renews: <span>11/17/2024</span></p>
                                <p className='premiumdetails2'>₱ 1,000.00 / month</p>
                            </div>
                        </Card.Header>
                    </Card>
                </div>
                <div className='profcard'>
                    <Card className='card'>
                        <Card.Body className='profcontainer'>
                            <Card.Title className=''></Card.Title>
                            <Card.Text className='titleprof'>
                                User Information
                            </Card.Text>

                            <div className='imgcontainer'>
                                <img src={imgprofile} alt="Preview Upload" className='profilepicture' />
                            </div>

                            <div className='info-container'>
                                <div className='info-row'>
                                    <span className='labelprofile'>Name:</span>
                                    {isEditingName ? (
                                        <>
                                            <input type="text" className="input-box" value={name} onChange={(e) => handleChange(e, 'name')} />
                                            <button className="save-btned" onClick={() => handleSaveClick('name')}>Save</button>
                                        </>
                                    ) : (
                                        <>
                                            <span className='inpname'>{name}</span>
                                            <button className="edit-btn" onClick={() => handleEditClick('name')}>Edit</button>
                                        </>
                                    )}
                                </div>
                                <div className='info-row'>
                                    <span className='labelprofile'>Email Address:</span>
                                    {isEditingEmail ? (
                                        <>
                                            <input type="text" className="input-box" value={email} onChange={(e) => handleChange(e, 'email')} />
                                            <button className="save-btned" onClick={() => handleSaveClick('email')}>Save</button>
                                        </>
                                    ) : (
                                        <>
                                            <span className='inpemail'>{email}</span>
                                            <button className="edit-btn" onClick={() => handleEditClick('email')}>Edit</button>
                                        </>
                                    )}
                                </div>
                                <div className='info-row'>
                                    <span className='labelprofile'>Password:</span>
                                    {isEditingPassword ? (
                                        <div className="password-edit-container">
                                            <input type="password" placeholder="Old Password" />
                                            <input type="password" placeholder="New Password" />
                                            <input type="password" placeholder="Confirm Password" />
                                            <div>
                                                <button className="cancel-btn" onClick={handleCancelPasswordClick}>Cancel</button>
                                                <button className="save-btn" onClick={handleSavePasswordClick}>Confirm</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <span className='inppass'>********</span>
                                            <button className="change-btn" onClick={handlePasswordEditClick}>Change</button>
                                        </>
                                    )}
                                </div>
                                <div className='info-row'>
                                    <span className='labelprofile'>Google Map Link:</span>
                                    <span className='inpmap'>map.com</span>
                                    <button className="edit-btn">Edit</button>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </div>
    );
};

export default User;
