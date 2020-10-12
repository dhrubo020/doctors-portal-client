import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BuisnessInfoCardStyle from './BuisnessInfoCardStyle.css';

const BuisnessInfoCard = (props) => {
    const { title, description, icon, background } = props.data
    return (
        <div className="col-md-4 text-white ">
            <div className={`d-flex align-items-center info-card justify-content-center p-3 info-${background}`}>
                <div className="info-icon mr-3">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div> 
            </div>
        </div>
    );
};

export default BuisnessInfoCard;