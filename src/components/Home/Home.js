import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TravelServicesCart from '../TravelServicesCart/TravelServicesCart';

const Home = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/travel')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <Banner></Banner>
       <div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-3 g-4"> 
            {
                services.slice(0,6).map(service =><TravelServicesCart
                    key={services.id}
                    service={service}
                     ></TravelServicesCart>)
            }
             </div> 
            </div> 
                 
            </div> 
            
          </div>
        </div>
    );
};

export default Home;