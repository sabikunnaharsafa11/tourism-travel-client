import React, { useEffect, useState } from 'react';
import TravelServicesCart from '../TravelServicesCart/TravelServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-headland-24418.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
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