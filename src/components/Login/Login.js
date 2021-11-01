import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router';
const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const {singInUsingGoogle} = useAuth();
    const uri = location?.state?.from || '/home';
    console.log(history,uri)
    const handleSignIn = () => {
        singInUsingGoogle()
        .then(res => history.push(uri))
      
    }
    return (
        <div className=" container d-flex justify-content-center ">
            <div className="mx-5 mt-5  shadow p-3 mb-5 bg-body rounded w-50">
            <boutton 
               onClick={handleSignIn}
               className="btn btn-dark mt-2"
               > <i className="fab fa-google"> Google Sing In</i></boutton>
            </div>
            
        </div>
    );
};

export default Login;