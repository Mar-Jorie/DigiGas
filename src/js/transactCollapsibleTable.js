import React, { useState } from 'react';
import { Table, Collapse } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './css/Transact.css'; 

const CollapsibleContent = ({ item, show, statusClass }) => (
    <tr className="">
        <td colSpan="4" className='collapsibledata'>
            <Collapse in={show}>
                <div className="p-3 border">
                    <p><strong>Reference Number: </strong> {item.refno}</p>
                    <p><strong>Product: </strong> {item.product}</p>
                    <p><strong>Payment Method: </strong> {item.paymentmethod}</p>
                    <p><strong>Date: </strong> {item.date}</p>
                    <p><strong>Customer: </strong> {item.customer}</p>
                    <p><strong>Amount: </strong> {item.amount}</p>
                    <p><strong>Status: </strong>
                        <span id='status-color' className={`status-label ${statusClass}`}>{item.status}</span> 
                    </p>
                </div>
            </Collapse>
        </td>
    </tr>
);

// Function to get the status class based on status
const getStatusClass = (status) => {
    switch (status) {
        case 'Paid':
            return 'status-paid';
        case 'Failed':
            return 'status-failed';
        case 'Unpaid':
            return 'status-unpaid';
        default:
            return '';
    }
};

// CollapsibleTable Component
const CollapsibleTable = ({ data = [] }) => {
    const [collapsedRows, setCollapsedRows] = useState({});

    const toggleCollapse = (index) => {
        setCollapsedRows((prevRows) => ({
            ...prevRows,
            [index]: !prevRows[index],
        }));
    };

    return (
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="th1">Reference Number</th>
                        <th>Customer</th>
                        <th className='statusth'>Status</th>
                        <th className="th2"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const statusClass = getStatusClass(item.status);
                        return (
                            <React.Fragment key={index}>
                                <tr
                                    className="tablerowdata"
                                    onClick={() => toggleCollapse(index)}
                                >
                                    <td className='refnotd'>{item.refno}</td>
                                    <td className='customertd'>{item.customer}</td>
                                    <td id='status' className={statusClass}>{item.status}</td>
                                    <td className='chevtd'>
                                        {collapsedRows[index] ? (
                                            <Icon.ChevronUp className='iconchev' />
                                        ) : (
                                            <Icon.ChevronDown className='iconchev' />
                                        )}
                                    </td>
                                </tr>
                                <CollapsibleContent
                                    item={item}
                                    show={collapsedRows[index]}
                                    statusClass={statusClass}
                                />
                            </React.Fragment>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default CollapsibleTable;
