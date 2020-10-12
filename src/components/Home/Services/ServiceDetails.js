import React from 'react';

const ServiceDetails = (props) => {
    const {img, title, description} = props.data;

    return (
            <div className="col-md-4 text-center">
                <img src={img} height="50" alt=""/>
                <p className="font-weight-bold my-4">{title}</p>
                <p className="text-mute">{description}</p>
            </div>
    );
};

export default ServiceDetails;