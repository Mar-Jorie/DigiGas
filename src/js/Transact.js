import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/User.css';
import Row from 'react-bootstrap/Row';
import CollapsibleTable from './transactCollapsibleTable';
import Calendar from './appcalendarFilter';

// Table Data
const userData = [
    { refno: '1234567890123', customer: 'Juan Dela Cruz', status: 'Paid', date: 'July 09, 2024', product: 'Diesel Fuel', paymentmethod: 'Gcash', amount: '₱ 200.00', additionalInfo: 'Specializes in React and CSS.' },
    { refno: '1234567890123', customer: 'Juan Dela Cruz', status: 'Unpaid', date: 'July 09, 2024', product: 'Diesel Fuel', paymentmethod: 'Gcash', amount: '₱ 200.00', additionalInfo: 'Specializes in React and CSS.' },
    { refno: '1234567890123', customer: 'Juan Dela Cruz', status: 'Failed', date: 'July 09, 2024', product: 'Diesel Fuel', paymentmethod: 'Gcash', amount: '₱ 200.00', additionalInfo: 'Specializes in React and CSS.' }
];


const User = () => {
    return (
        <div className='cardcontents'>
            <div className='usertitle'>
                <h1 className='usertitle'>Transactions</h1>
                <div className='searchFilter'>
                    <Calendar />
                </div>
            </div>
            <Row xs={1} md={1} className="g-4">
                <div className='revenueCard'>
                    <CollapsibleTable data={userData} />
                </div>
            </Row>
        </div>
    );
};

export default User;
