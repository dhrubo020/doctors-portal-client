import React from 'react';
import doctor from '../../../images/doctor.png';
import MakeAppointmentStyle from './MakeAppointmentStyle.css';

const MakeAppointment = () => {
    return (
        <div>
            <div className="container make-appointment-container">
                <div className="layer">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={doctor} height="400px" alt="" />
                        </div>
                        <div className="col-md-7">
                            <div className=" text-white p-5 mt-4 mr-5">
                                <p style={{color:'#1CC7C1'}}>APPOINTMENT</p>
                                <h3 className="font-weight-bold my-4">Make an appointment <br /> Today</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, cum saepe nemo a laudantium ad?</p>
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;