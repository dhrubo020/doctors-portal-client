import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const DashBoard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date.toDateString());
    }

    useEffect( () => {
        console.log(selectedDate)
        fetch('https://doctors-portal-01.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            setAppointments(data)
        })
    }, [selectedDate])

    return (
        <div>
            <div style={containerStyle} className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                    <div className="col-md-5">
                        <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;