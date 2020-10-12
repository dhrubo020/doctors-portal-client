import React from 'react';
import BuisnessInfoCard from './BuisnessInfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BuisnessInfo = () => {
    const dataInfo = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn NY 1003, USA',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call Us Now',
            description: '+1569820414',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center ">
            <div className="row w-75">
                {
                    dataInfo.map((each, index) => <BuisnessInfoCard key={index} data={each} />)
                }
            </div>

        </section>
    );
};

export default BuisnessInfo;