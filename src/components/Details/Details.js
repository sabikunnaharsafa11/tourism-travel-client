import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {
  const { user } = useAuth();
    const {serviceId} =useParams();
    const[service,setService]= useState() ;
 
   useEffect(() => {
        fetch("http://localhost:5000/travel")
          .then((res) => res.json())
          .then((result) => setService(result));
      }, []);
   console.log(service)
   const selected = service ? service.filter(s => s.id == serviceId):[];
   console.log(selected);
    return (
       <>
       {selected.map(service => (
           <div className="container d-flex justify-content-center mt-5 mb-5">
            <div className="row col-md-6 ">
            <div class="card w-20% h-20%">
            <img src={service.img} class="card-img-top" alt="..." />
            <h2>{service.name}</h2>
            <h4>{service.title}</h4>
            <div class="card-body">
              <p class="card-text">{service.paragrap}</p>
            </div>
          </div>
            </div>
           </div>
       ))}
        </>
    );
};

export default Details;