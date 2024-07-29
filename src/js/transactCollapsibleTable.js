import React, { useState } from 'react';
import { Table, Collapse } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const CollapsibleContent = ({ item, show, handleShow }) => (
    <tr className="">
        <td colSpan="4" className='collapsibledata'>
            <Collapse in={show}>
                <div className="p-3 bg-light border">
                    <p><strong>Reference Number:</strong> {item.refno}</p>
                    <p><strong>Product:</strong> {item.product}</p>
                    <p><strong>Payment Method:</strong> {item.paymentmethod}</p>
                    <p><strong>Date:</strong> {item.date}</p>
                    <p><strong>Customer:</strong> {item.customer}</p>
                    <p><strong>Amount:</strong> {item.amount}</p>
                    <p><strong>Status:</strong> {item.status}</p>
               
                </div>
            </Collapse>
        </td>
    </tr>
);

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
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="th1">Referene Number</th>
                        <th>Customer</th>
                        <th>Status</th>
                        <th className="th2"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className="tablerowdata" onClick={() => toggleCollapse(index)}>
                                <td>{item.refno}</td>
                                <td>{item.customer}</td>
                                <td>{item.status}</td>
                                <td>
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
                            />
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>

           
        </>
    );
};

export default CollapsibleTable;
