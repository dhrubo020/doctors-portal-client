import React from 'react';
import care from '../../../images/exceptionalCare.png';

const ExceptionalCare = () => {
    return (
        <div>
            <div className="container mt-5 p-3">
                <div className="row">
                    <div className="col-md-5">
                        <img src={care} alt="" height="500px" />
                    </div>
                    <div className="col-md-7 ">
                        <div className="p-4">
                            <h2 style={{color:'#3A4256'}} className="font-weight-bold mt-5">Exceptional Dental <br /> Care, For Your Terms</h2>
                            <p className="text-mute mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas doloribus fugit nam accusantium aut vitae sapiente exercitationem modi repellat, natus nostrum ea aliquam totam quam eius dolorem cum porro distinctio aliquid atque. Magnam fuga, qui modi laudantium earum minus, numquam natus labore ea, vitae dolorem alias iusto provident dicta.</p>
                            <button className="btn btn-primary mt-5">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;