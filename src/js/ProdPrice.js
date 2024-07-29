import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/User.css';
import Row from 'react-bootstrap/Row';
import SearchBar from './Searchbar';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import CollapsibleTable from './prodCollapsibleTable';

//Table Data
const userData = [
  { name: 'Diesel Fuel', price: '₱ 200.00', status: 'Active', additionalInfo: 'Specializes in React and CSS.' },
  { name: 'Diesel Fuel', price: '₱ 200.00', status: 'Active', additionalInfo: 'Experienced in Node.js and databases.' }
  // Add more user data as needed
];


//Add Button
const AddButton = () => {
  const handleClick = () => {
    // Redirect to the adduser page
    window.location.href = "/addProdprice"; // Link to Page
  };
  return (
    <Button
      variant="warning"
      className="add-user-button"
      onClick={handleClick}
    >
      <Icon.Plus className='plusbtnicon' />
    </Button>
  );
};


const User = () => {
  return (
    <div className='cardcontents'>
      <div className='usertitle'>
        <h1 className='usertitle'>Product Price</h1>
        <div className='searchFilter'>
          <SearchBar />
        </div>
      </div>
      <Row xs={1} md={1} className="g-4">
        <div className='revenueCard'>
          <CollapsibleTable data={userData} />
        </div>
      </Row>
      <AddButton />
    </div>
  );
};

export default User;
