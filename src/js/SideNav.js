import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './css/SideNav.css';
import * as Icon from 'react-bootstrap-icons';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';


const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        setIsOpen(prevState => !prevState);
    };

    const closeSideNav = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {!isOpen && (
                <button className="open-btn" onClick={toggleSideNav}>
                    <Icon.List className='iconnnav' />
                </button>
            )}
            <div className={`side-nav ${isOpen ? 'open' : ''}`}>
                <div className="side-nav-header">
                    <button className="close-btn" onClick={toggleSideNav}>
                        <Icon.ChevronLeft className='closechev' />
                    </button>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <h4>DigiGas</h4>
                        <p>Gasoline Application</p>
                    </div>
                </div>
                <Nav className="flex-column navigationslist">
                    <Nav.Link as={Link} to="/card" onClick={closeSideNav}>
                        <Icon.ColumnsGap className='icon1' /> Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/user" onClick={closeSideNav}>
                        <Icon.People className='icon1' /> User
                    </Nav.Link>
                    <Nav.Link href="#product-price" onClick={closeSideNav}>
                        <Icon.TagsFill className='icon1' /> Product Price
                    </Nav.Link>
                    <Nav.Link href="#transaction" onClick={closeSideNav}>
                        <Icon.ArrowLeftRight className='icon1' /> Transaction
                    </Nav.Link>
                    <Nav.Link href="#profile-settings" onClick={closeSideNav}>
                        <Icon.PersonFillGear className='icon1' /> Profile Settings
                    </Nav.Link>
                    <Nav.Link href="#logout" className='logoutbtn' onClick={closeSideNav}>
                        <Icon.BoxArrowRight className='icon1' /> Logout
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default SideNav;