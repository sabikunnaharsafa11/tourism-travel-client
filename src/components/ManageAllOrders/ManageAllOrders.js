import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
         fetch('http://sheltered-headland-24418.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setServices(data))
    } ,[]);

     const handleDelete = id => {
         const url = `http://sheltered-headland-24418.herokuapp.com/services/${id}`;
         fetch(url, {
            method: "DELETE",
            // headers: {"Content-Type":"application/json"},
            // body: JSON.stringify(data)
        
         })
         .then((res) => res.json())
        .then((data) => {    
        console.log(data) 
        if(data.deletedCount){  
            alert('deleted')
            const remaining = services.filter(service => service._id !== id);
            setServices(remaining);
        }

    });
           
     }

    return (
    
        <div>
            <h3 className="text-center">Manage All Orders</h3>
          
            
          
             {
                 services.map(service => <di key={service._id}>
                       <div className="container d-flex justify-content-center mt-5 mb-5">
                        <div className="row col-md-3 w-100% h-100%"> 
                        <div class="card ">
                        <img src={service.img} class="card-img-top" alt="..." />  
                          <h3>{service.name}</h3>
                          <h4>{service.price}</h4>

                          <div >
                          <button className=" btn btn-danger btn2 mb-3 " onClick={() => handleDelete(service._id)}>Delect</button>
                          </div>

                          </div>
                          </div>
                         
                          </div>
                          
                 </di>)
             }
           
            <div class="card-body">
              <p class="card-text"></p>
            </div>
          </div>
            
        
        
    );
};

export default ManageAllOrders;