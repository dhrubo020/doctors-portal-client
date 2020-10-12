import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctors = () => {
    const [doctorInfo, setDoctorInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = { ...doctorInfo }
        newInfo[e.target.name] = e.target.value
        setDoctorInfo(newInfo)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', doctorInfo.name)
        formData.append('email', doctorInfo.email)

        fetch('https://doctors-portal-01.herokuapp.com/addADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <section className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>


                <div className="col-md-10 p-4 pr-5" style={{ position: 'relative' }}>
                    <h3 className="text-brand"> Add Doctor</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label >Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label >Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                        </div>
                        <div class="form-group">
                            <label className="d-block" >Upload Image</label>
                            <input onChange={handleFileChange} type="file" class="" id="" placeholder="Name" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddDoctors;