import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   
    const {singInUsingGoogle} = useAuth();

    return (
        <div className=" container d-flex justify-content-center ">
            <div className="mx-5 mt-5  shadow p-3 mb-5 bg-body rounded w-50">
            <boutton 
               onClick={singInUsingGoogle}
               className="btn btn-dark mt-2"
               > <i className="fab fa-google"> Google Sing In</i></boutton>
            </div>
            
        </div>
    );
};

export default Login;