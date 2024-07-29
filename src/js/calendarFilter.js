import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import './css/App.css';

const PopupCalendarFilter = ({ show, handleClose, onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [intervalType, setIntervalType] = useState('Daily');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <Modal show={show} onHide={handleClose} className='mainmodal'>

      <Modal.Body className=''>
     
          <Row className="justify-content-center row">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              calendarClassName="custom-calendar"
            />
          </Row>
          <Row className="rowcontainer">
            <Col className="columnsinterval">
              <h5 className='intervaltitle'>Select Interval Type</h5>
              <div className="btn-group groupintervalbtns" role="group">
                <Button
                  variant={intervalType === 'Daily' ? 'primary' : 'outline-primary'}
                  onClick={() => setIntervalType('Daily')}
                >
                  Daily
                </Button>
                <Button
                  variant={intervalType === 'Weekly' ? 'primary' : 'outline-primary'}
                  onClick={() => setIntervalType('Weekly')}
                >
                  Weekly
                </Button>
                <Button
                  variant={intervalType === 'Monthly' ? 'primary' : 'outline-primary'}
                  onClick={() => setIntervalType('Monthly')}
                >
                  Monthly
                </Button>
                <Button
                  variant={intervalType === 'Quarterly' ? 'primary' : 'outline-primary'}
                  onClick={() => setIntervalType('Quarterly')}
                >
                  Quarterly
                </Button>
              </div>
            </Col>
          </Row>
     
        <Button className='btnclose' variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>

       
    </Modal>
  );
};

export default PopupCalendarFilter;
