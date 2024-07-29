import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import './css/App.css';

const SearchBar = () => {
  return (
    <Form className="my-2 my-lg-0 formcontainer">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search Name"
          className="bg-transparent inputsearch"
        />
        <InputGroup.Text className="bg-transparent">
          <Search className='searchIcon' />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
