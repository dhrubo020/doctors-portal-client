import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Banner from '../../Home/Header/Banner';
import Navbar from '../../Home/Header/Navbar';
import AppointmentList from '../AppointmentList/AppointmentList';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleDateChange=(date)=>{
        setSelectedDate(date)
    }
    return (
        <div>
            <div className="top-container">
                <Navbar />
                <AppointmentBanner handleDateChange={handleDateChange} />
                <AppointmentList date={selectedDate}/>
                <Footer />
            </div>
        </div>
    );
};

export default Appointment;