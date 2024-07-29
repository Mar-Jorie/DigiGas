import React from 'react'
import './css/header.css'
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className="header">
  
          <SideNav />
          <img src={logo} alt='digigas logo' className='logoheader' />
       
    </header>
  )
}

export default Header
