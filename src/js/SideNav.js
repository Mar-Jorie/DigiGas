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
        document.body.classList.toggle('sidenav-open', !isOpen);
    };

    const closeSideNav = () => {
        setIsOpen(false);
        document.body.classList.remove('sidenav-open');
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
                    <Nav.Link as={Link} to="/card" onClick={closeSideNav} className='menus'>
                        <Icon.ColumnsGap className='icon1' /> Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/user" onClick={closeSideNav} className='menus'>
                        <Icon.People className='icon1' /> User
                    </Nav.Link>
                    <Nav.Link as={Link} to="/ProdPrice" onClick={closeSideNav} className='menus'>
                        <Icon.TagsFill className='icon1' /> Product Price
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Transact" onClick={closeSideNav} className='menus'>
                        <Icon.ArrowLeftRight className='icon1' /> Transaction
                    </Nav.Link>
                    <Nav.Link as={Link} to="/profSettings" onClick={closeSideNav} className='menus'>
                        <Icon.PersonFillGear className='icon1' /> Profile Settings
                    </Nav.Link>
                    <Nav.Link as={Link} to="#logout" className='logoutbtn menus' onClick={closeSideNav} >
                        <Icon.BoxArrowRight className='icon1' /> Logout
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default SideNav;
