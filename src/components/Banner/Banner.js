import React from 'react';
import bannerbg from './../../img/download.jpg'

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '500px',

    }
    return (
        <div style={bannerStyle}>
           <div className="container mb-5">
                 <h1 className="text-center">Tourism & Travel</h1>
           </div>
        </div>
    );
};

export default Banner;