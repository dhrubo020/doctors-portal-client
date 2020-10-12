import React from 'react';
import Chair from '../../../images/chair.png';
import ChairBg from '../../../images/chairBg.png';


const Banner = () => {
    return (
        <div>
            <div style={{height:'600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color:'#3A4256'}} className="font-weight-bold">Your New Smile <br/> Starts Here</h1>
                    <p className="text-mute">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga vero nobis voluptates eius possimus labore natus saepe, voluptatibus laudantium.</p>
                    <button className="btn btn-secondary">GET APPOINTMENT</button>
                </div>
                <div className="col-md-6">
                    <img src={Chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;