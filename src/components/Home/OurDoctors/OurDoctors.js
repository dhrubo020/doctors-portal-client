import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor-half.png';

const OurDoctors = () => {

    const [doctorList, setDoctorList] = useState([])
    useEffect(() => {
        fetch(`https://doctors-portal-01.herokuapp.com/doctorList`)
            .then(res => res.json())
            .then(data => {
                setDoctorList(data)
            })
    }, [])

    return (
        <div style={{ marginTop: '180px' }} className="">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Doctors</h5>
            </div>
            <div className="row">

                {
                    doctorList.length > 0
                        ?
                        doctorList.map(each =>
                            <div className="col-md-4">
                                <div className="p-3" >
                                    <div className="text-center">
                                        <img src={`data:image/jpeg;base64,${each.image.img}`} height="300px" alt="" />
                                        <p><b>Dr. Cardy</b></p>
                                        <span><i class="fas fa-phone-alt"></i> <span className="text-muted">+16237564872</span>  </span>
                                    </div>
                                </div>
                            </div>
                        )

                        :
                        <div className="col-md-4">
                            <h6>Finding...</h6>
                        </div>
                }




            </div>
        </div>
    );
};

export default OurDoctors;