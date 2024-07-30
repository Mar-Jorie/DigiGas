import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import GraphOnecard from './graph1';
import GraphTwocard from './graph2';
import SelectType from './selectType';
import Calendar from './appcalendarFilter';



function Cards() {
  return (
    <div className='cardcontents'>
      <div className='dashboardtitle'>
        <h1 className='dashboardText'>Dashboard</h1>
        <div className='filterdateContainer1'>
          <Calendar />
        </div>
      </div>


      <Row xs={1} md={2} className="g-4">
        <div className='revenueCard'>
          <Card className='card'>
            <Card.Body className='containerRevenue'>
              <Icon.GraphUp className='revenueIcon' />
              <Card.Title className='valueRevenue'><p className='pesosign'>₱</p> <p className='number'>0.00</p></Card.Title>
              <Card.Text className='titleRevenue'>
                Total Revenue
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className='transactCard'>
          <Card className='card'>
            <Card.Body className='containerTransact'>
              <Icon.CartFill className='transactionIcon' />
              <Card.Title className='valueTransact'><br /> <p>0</p></Card.Title>
              <Card.Text className='titleTransact'>
                Total Transactions
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>


      <Row xs={1} md={1} className="g-4">

        <div className='revenueCard'>
          <Card className='monthlyCard'>
            <Card.Header as="h5" className='graphRevenue'>Monthly Revenue</Card.Header>
            <Card.Body className='graphOneContent'>
              <GraphOnecard />
            </Card.Body>
          </Card>

        </div>
      </Row>


      <div className='secondContainer'>
        <Row xs={1} md={2} className="g-4">
          <div className='paymentoptioncontainer'>
            <SelectType />
          </div>
          <div className='filterdateContainer'>
            <Calendar />
          </div>
        </Row>
      </div>
      <Row xs={1} md={1} className="g-4">

        <div className='revenueCard'>
          <Card className='monthlyCard'>
            <Card.Header as="h5" className='graphRevenue'>Revenue and Transactions</Card.Header>
            <Card.Body className='graphOneContent'>
              <GraphTwocard />
            </Card.Body>
          </Card>

        </div>
      </Row>

    </div>


  );
}

export default Cards;