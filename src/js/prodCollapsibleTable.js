import React, { useState } from 'react';
import { Table, Collapse, Modal, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

// Edit Button
const EditButton = () => {
    const handleClick = () => {
        window.location.href = "/editProdprice";
    };
    return (
        <Button
            variant="warning"
            className="edituserbtn"
            onClick={handleClick}
        >
            <Icon.PencilFill className='pencilbtnedit' />Edit
        </Button>
    );
};

// Active Button
const ActiveButton = () => {
    const handleClick = () => {
        window.location.href = "";
    };
    return (
        <Button
            variant="primary"
            className="activebtn"
            onClick={handleClick}
        >
            Active
        </Button>
    );
};

// Confirmation Modal
const ConfirmationModal = ({ show, handleClose, handleConfirm }) => (
    <Modal show={show} onHide={handleClose} centered className="custom-modal-top">
        <div className='headermodalconfirm'>
            <p className='titlemodalAction'>

                <div className='circle-bg'><Icon.TrashFill />
                </div>
                <p className='deletetitle'>Delete Data</p>

            </p>
        </div>
        <div className='bodydivconfirm'>
            <p>Are you sure you want to delete this data?</p>
            <Button onClick={handleClose} className='cancelbtn'>Cancel</Button>
            <Button onClick={handleConfirm} className='deleteconfirm'><Icon.TrashFill className='' /> Delete</Button>
        </div>
    </Modal>
);

// Success Modal
const SuccessModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose} centered className="custom-modal-top">
        <div className='headermodalconfirmed'>
            <div className='titlemodalAction'>

                <div className='circle-bg'><Icon.Check className='checkicon'/>
                </div>
                <div className='deletetitle'>Data Successfully
                <br/>Deleted!</div>
                <Button className='okbtn' onClick={handleClose}>Confirm</Button>

            </div>
        </div>
      
    </Modal>
);

// More Actions Modal
const MoreActionsModal = ({ show, handleClose, handleDeleteShow }) => (
    <Modal show={show} onHide={handleClose} centered>
        <div className='headermodal'>
            <p className='titlemodalAction'> <Icon.MenuButtonFill className='handactionIcon' /> Action</p>
        </div>
        <div className='bodydiv'>
            <Button className="cancelbtn" onClick={handleClose}>Cancel</Button>
            <Button className="delbtn" onClick={handleDeleteShow}> <Icon.TrashFill className='' /> Delete</Button>
        </div>
    </Modal>
);

const CollapsibleContent = ({ item, show, handleShow }) => (
    <tr className="">
        <td colSpan="4" className='collapsibledata'>
            <Collapse in={show}>
                <div className="p-3 bg-light border">
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Status:</strong> {item.status}</p>
                    <div className='btncollapsible'>
                        <EditButton />
                        <ActiveButton />
                        <Icon.ThreeDotsVertical className='btnsIcon' onClick={handleShow} />
                    </div>
                </div>
            </Collapse>
        </td>
    </tr>
);

// CollapsibleTable Component
const CollapsibleTable = ({ data = [] }) => {
    const [collapsedRows, setCollapsedRows] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [successModalShow, setSuccessModalShow] = useState(false);

    const toggleCollapse = (index) => {
        setCollapsedRows((prevRows) => ({
            ...prevRows,
            [index]: !prevRows[index],
        }));
    };

    const handleShow = () => setModalShow(true);
    const handleClose = () => {
        setModalShow(false);
        setDeleteModalShow(false);
        setSuccessModalShow(false);
    };
    const handleDeleteShow = () => {
        setModalShow(false);
        setDeleteModalShow(true);
    };
    const handleSuccessClose = () => setSuccessModalShow(false);

    const handleConfirm = () => {
        // Handle deletion logic here
        console.log("Item deleted");
        setDeleteModalShow(false); // Close confirmation modal
        setSuccessModalShow(true); // Show success modal
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="th1">Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th className="th2"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            <tr className="tablerowdata" onClick={() => toggleCollapse(index)}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
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
                                handleShow={handleShow}
                            />
                        </React.Fragment>
                    ))}
                </tbody>
            </Table>

            <MoreActionsModal
                show={modalShow}
                handleClose={handleClose}
                handleDeleteShow={handleDeleteShow}
            />
            <ConfirmationModal
                show={deleteModalShow}
                handleClose={handleClose}
                handleConfirm={handleConfirm}
            />
            <SuccessModal
                show={successModalShow}
                handleClose={handleSuccessClose}
            />
        </>
    );
};

export default CollapsibleTable;
