import React from 'react';
import Banner from './Banner';
import BuisnessInfo from './BuisnessInfo/BuisnessInfo';
import Navbar from './Navbar';
import TopLayOutStyle from './TopLayOutStyle.css'

const TopLayOut = () => {
    return (
        <div className="top-container">
            <Navbar/>
            <Banner/>
            <BuisnessInfo/>
        </div>
    );
};

export default TopLayOut;