import React from 'react';
import Contact from '../Home/Contact/Contact';
import ExceptionalCare from '../Home/ExceptionalCare/ExceptionalCare';
import Footer from '../Home/Footer/Footer';
import TopLayOut from '../Home/Header/TopLayOut';
import MakeAppointment from '../Home/MakeAppointment/MakeAppointment';
import OurBlog from '../Home/OurBlog/OurBlog';
import OurDoctors from '../Home/OurDoctors/OurDoctors';
import Services from '../Home/Services/Services';
import Testimonial from '../Home/Testimonial/Testimonial';
import LandingPageStyle from './LandingPageStyle.css'

const LandingPage = () => {
    return (
        <div className="">
            <TopLayOut />
            <Services />
            <div className="container">
                <ExceptionalCare />
                <MakeAppointment />
                <Testimonial />
                <OurBlog/>
                <OurDoctors/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default LandingPage;