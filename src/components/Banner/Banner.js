import React from 'react';
import bannerbg from './../../img/bg1.jpg'

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '450px',

    }
    return (
        <div style={bannerStyle}>
           <div className="container mb-5">
                 <h1>life is Travel</h1>
           </div>
        </div>
    );
};

export default Banner;