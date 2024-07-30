import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Profilesettings.css';
import * as Icon from 'react-bootstrap-icons';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const User = () => {
    return (
        <div className='cardcontents'>
            <div className='usertitle'>
                <h1 className='usertitle'>Profile Settings</h1>
            </div>
            <Row xs={1} md={1} className="g-4">
                <div className='maincontents'>
                    <Card className='maincard'>
                        <Card.Header as="h5" className='subsContainer'>
                            <Icon.CreditCardFill className='creditcardicon' />
                            <div className='premiumtitle'>
                                <p className='premiumtitle1'>Premium</p>
                                <p className='premiumtitle2'>Subscription Plan</p>
                            </div>
                            <div className='premiumdetails'>
                                <p className='premiumdetails1'>Renews: <span>11/17/2024</span></p>
                                <p className='premiumdetails2'>₱ 1,000.00 / month</p>
                            </div>
                        </Card.Header>
                    </Card>
                </div>
            </Row>
        </div>
    );
};

export default User;
