import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Booking = () => {
  const { user } = useAuth();
    const {serviceId} =useParams();
    const[service,setService]= useState({}) ;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
   useEffect(() => {
        fetch(`http://sheltered-headland-24418.herokuapp.com/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
          
      }, []);

    const onSubmit = data => {     
        fetch('http://sheltered-headland-24418.herokuapp.com/orders', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
        console.log(data);
       
    } 
//    
    return (
          <div>
           <div className="container  mt-5 mb-5">
            <div className="row col-md-4 ">
            <div class="card w-20% h-20%">
              <h3>this is bokking: {serviceId}</h3>
            <img src={service.img} class="card-img-top" alt="..." />
            <h4>{service.name}</h4>
            <h4>Price: { service.price}</h4>
            {/* <h4>{service.title}</h4> */}
            <div class="card-body">
              <p class="card-text">{service.paragrap}</p>
            </div>
          </div>
            </div>
            <div className="row col-md- " >
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className="p-2 m-2"  placeholder="name" {...register("name")} />
        <br />
        <input className="p-2 m-2"  placeholder="email" {...register("email")} />
        <br />
      <input type="number" className="p-2 m-2"  placeholder="price" {...register("price")} />    
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />

      <input className="btn btn-danger  " type="submit" />
    </form>
            </div>
            </div>
            </div>
           
    
    );
};

export default Booking;