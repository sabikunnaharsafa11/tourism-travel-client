import React, { useEffect, useState } from 'react';
import TravelServicesCart from '../TravelServicesCart/TravelServicesCart';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/travel')
        .then(res => res.json())
        .then(data => setservices(data))
    },[])
    return (
        <div>
           <h2 className="text-center mt-5" > Our Services</h2> 
           <div className="container">
         <div className="row mt-5 mb-5"> 
         <div className="col-lg-12">
            <div className="row row-cols-1 row-cols-md-4 g-4"> 
            {
                services.map(service=><TravelServicesCart
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

export default Services;