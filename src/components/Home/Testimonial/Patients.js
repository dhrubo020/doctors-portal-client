import React from 'react';

const Patients = (props) => {
    const { name, place, img } = props.data;

    return (
        <div>
            <div className="card m-3" >
                <div className="card-body">
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto debitis aliquid alias, omnis tempore ad architecto quae velit explicabo ratione deleniti eligendi reiciendis tempora inventore animi dolorem quisquam, molestiae rerum. Rem maiores exercitationem eos temporibus porro illum neque assumenda, accusamus officiis illo tenetur, soluta explicabo est. Vitae, corporis eligendi.</p>
                </div>
                <br/>
                <div className={`d-flex align-items-center info-card justify-content-center p-3`}>
                    <div className="info-icon mr-3">
                        <img src={img} height="60" alt=""/>
                    </div>
                    <div>
                        <h6>{name}</h6>
                        <small>{place}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patients;