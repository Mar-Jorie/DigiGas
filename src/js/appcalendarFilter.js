import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupCalendarFilter from './calendarFilter'; // Adjust the path accordingly

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleShow = () => setShowCalendar(true);
  const handleClose = () => setShowCalendar(false);
  const handleDateSelect = (date) => setSelectedDate(date);

  return (
    <div>
      <div className='dateRange' onClick={handleShow}>
      <p className='placeholderdate'><Icon.CalendarWeek className='iconcalendar' /> Date Range</p>
      </div>
      <PopupCalendarFilter
        show={showCalendar}
        handleClose={handleClose}
        onSelectDate={handleDateSelect}
      />
    </div>
  );
};

export default App;
