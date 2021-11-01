import React from 'react';
import img from './../../img/shutterstock-1041475570.webp'
const About = () => {
    return (
        < div className="mt-5">
        <h2 className="h1-responsive fw-bold text-uppercase text-center mt-5">About Us</h2>
        <div className="container  mb-5">
  <div className="">
    <div className="row d-flex banner align-items-center justify-content-center">
      <div className="col-md-7 mb-4">
        <h2 className="title">Why Choose Tourism
        </h2>
        <p className="text-black mt-3 ">
        Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". Places where many tourists stay are called "resorts". ... Some people travel to do an activity which they cannot do at home.
        </p>
      </div>
      <div className="col-md-5">
      <img src={img} alt="..."></img>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default About;