import Form from 'react-bootstrap/Form';

function SelectType() {
  return (
    <Form.Select aria-label="Payment Method" className='paymentoption'>
      <option className='paymentoption'>Payment Method</option>
      <option className='paymentoption' value="Gcash">Gcash</option>
      <option className='paymentoption' value="PayMaya">PayMaya</option>
      <option className='paymentoption' value="Debit/Credit">Debit/Credit</option>
    </Form.Select>
  );
}

export default SelectType;