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
        fetch(`https://sheltered-headland-24418.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
          
      }, []);

    const onSubmit = data => {     
        fetch('https://sheltered-headland-24418.herokuapp.com/orders', {
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
      <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card">
            <img src={service.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <h5 className="card-title">{service.price}</h5>
              <p className="card-text">{service.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-2 m-2 form-control"
              placeholder="name"
              {...register("name")}
              value = {user.displayName}
              readOnly
            />
            <br />
            <input
              className="p-2 m-2 form-control"
              placeholder="email"
              {...register("email")}
              value = {user.email}
              readOnly
            />
            <br />
            <input
              type="text"
              className="p-2 m-2 form-control"
              placeholder="name"
              {...register("name")}
              value = {service.name}
              readOnly
            />
            <br />
            <input
              type="number"
              className="p-2 m-2 form-control"
              placeholder="price"
              {...register("price")}
            />
            <br />
            <input
              type="text"
              className="p-2 m-2 form-control"
              placeholder="Adress"
              {...register("Adress")}
            />
            <br />
            {!service.name ? (
              <button type="submit" className="btn btn-success" disabled>
                Purchase Now
              </button>
            ) : (
              <button type="submit" className="btn btn-success">
                Purchase Now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
    
    );
};

export default Booking;