import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../img/images1.png'
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (     
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary text-drak  p-2 mb-3 bg-body rounded bg-secondary">
        <div className="container d-flex justify-content-between ">
            <div>
            <img className="d-flex justify-content-start"  src={logo} alt="" width="30%" height="30%"/>
            </div>
            <div>
            <div className=" collapse navbar-collapse fs-5" id="navbarSupportedContent">
                  
            <NavLink to="/home" activeClassName="selected"
                activeStyle={{
                fontWeight: "bold",
                color:"bule",
                textDecoration:'block'
              }} className="nav-link" aria-current="page"> Home</NavLink>                        
                        
            <NavLink to="/services"  activeClassName="selected"
            activeStyle={{
                fontWeight: "bold",
                color: "bule",
                textDecoration: 'block'
              }} className="nav-link">Services</NavLink>                                                    
              <NavLink to="/about"  activeClassName="selected"
            activeStyle={{
                fontWeight: "bold",
                color: "bule",
                textDecoration: 'block'
              }} className="nav-link" >About</NavLink>
                                          
             <NavLink to="/contactus"  activeClassName="selected"
            activeStyle={{
                fontWeight: "bold",
                color: "bule",
                textDecoration: 'block'
              }} className="nav-link">Contact Us</NavLink>

               
{ user.email && <span style={{color:'black'}}> Hey {user.displayName} </span>}
       
       {
           user.email ? 
           <button className="btn btn-primary" onClick={logOut}>log Out</button>
           :
           <NavLink to="/login"
       activeClassName=""
    className="nav-link"
       > <button className="btn btn-outline-primary">Login</button></NavLink>}
                      
                </div>
            </div>
        </div>
    </nav>

    );
};

export default Header;