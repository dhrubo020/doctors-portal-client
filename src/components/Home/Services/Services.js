import React from 'react';
import ServicesStyle from './ServicesStyle.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from './ServiceDetails';


const Services = () => {
    const serviceData = [
        {
            img: fluoride,
            title: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the Lopsum'
        },
        {
            img: cavity,
            title: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the Lopsum'
        },
        {
            img: whitening,
            title: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the Lopsum'
        }
    ]
    return (
        <div>
            <section className="services-container ">
                <div className="text-center">
                    <h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
                    <h2 style={{ color: '#3A4256' }} className="font-weight-bold">Services We Provide</h2>
                </div>

                <div className="d-flex justify-content-center ">
                    <div className="row w-75 mt-5 pt-3">
                        {
                            serviceData.map((each,index)=> <ServiceDetails data={each} /> )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;