import React from 'react';
import commaImage from '../../../images/comma.png';
import Patients from './Patients';
import patient1 from '../../../images/Ellipse 1.png'
import patient2 from '../../../images/Ellipse 2.png'
import patient3 from '../../../images/Ellipse 3.png'

const Testimonial = () => {
    const patients = [
        {
            name: 'Winson Harry',
            place: 'California',
            img : patient1
        },
        {
            name: 'Winson Harry',
            place: 'California',
            img : patient2
        },
        {
            name: 'Winson Harry',
            place: 'California',
            img : patient3
        }
    ]
    return (
        <div>
            <div className="testimonial-container mt-5">
                <p className="font-weight-bold" style={{ color: '#1CC7C1' }}> <b>TESTIMONIAL</b> </p>
                <h3 className="font-weight-bold d-inline-block" style={{ color: '#3A4256' }}>What's Our Patients <br /> Says</h3>
                <img className="float-right d-inline" height="80" src={commaImage} alt="" />
            </div>
            <br/>
            <div className="d-flex justify-content-center text-center">
                {
                    patients.map((each, index)=> <Patients key={index} data={each} />)
                }
            </div>
        </div>
    );
};

export default Testimonial;