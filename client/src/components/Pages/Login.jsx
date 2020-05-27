import React from 'react';
import LoginCard from '../Login/LoginCard';
import MiddleCard from '../Login/MiddleCard';
import DefCard from '../Login/DefCard';


const Login = () =>{
    return(
        <div>
            <LoginCard />  
            <MiddleCard />
            <DefCard />
        </div>
    )
}
export default Login;