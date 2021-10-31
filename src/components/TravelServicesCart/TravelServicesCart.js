import React from 'react';
import { Link } from 'react-router-dom';
import ('./TravelServicesCart.css')

const TravelServicesCart = (props) => {
    const { _id, name, price, description, img} = props.service;
    return (
        <div>
      <div className="card course-card course-section d-flex justify-content-center ounded-20px">
      <img className="img-desigen" src={img} alt="" />
      <div className="mt-4 text-start ms-4">
         <h5>{name}</h5>
         <h6>Price:{price}</h6>
        <p className="fw-normal text-start "> {description}</p>
         <div className="mb-3">
         <button type="button" className="btn btn-primary btn1 "><Link className="btn2" to={`/booking/${_id}`}>Buy Now</Link></button>
      </div>      
         </div>
      </div>      
        </div>
    );
};

export default TravelServicesCart;