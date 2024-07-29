import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/User.css';
import Row from 'react-bootstrap/Row';
import SearchBar from './Searchbar';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'; 
import CollapsibleTable from './collapsibleTable';

//Table Data
const userData = [
  { fname: 'Alice', lname: 'Johnson', additionalInfo: 'Specializes in React and CSS.' },
  { fname: 'Bob', lname: 'Brown', additionalInfo: 'Experienced in Node.js and databases.' }
  // Add more user data as needed
];


//Add Button
const AddButton = () => {
  const handleClick = () => {
    // Redirect to the adduser page
    window.location.href = "/addUserpage"; // Link to Page
  };
  return (
    <Button
      variant="warning" 
      className="add-user-button" 
      onClick={handleClick}
    >
     <Icon.Plus className='plusbtnicon'/>
    </Button>
  );
};


const User = () => {
  return (
    <div className='cardcontents'>
      <div className='usertitle'>
        <h1 className='usertitle'>User</h1>
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