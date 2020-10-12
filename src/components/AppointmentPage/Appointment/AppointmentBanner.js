import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Chair from '../../../images/chair.png';
import ChairBg from '../../../images/chairBg.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentBanner = ({handleDateChange}) => {
    
    return (
        <div>
            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }} className="font-weight-bold">Appointment</h1>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                        className={['c1','c2']}
                    />
                </div>
                <div className="col-md-6">
                    <img src={Chair} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;