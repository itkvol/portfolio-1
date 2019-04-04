import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <span>
       
           <li><NavLink to="/dashboard">Dashboard</NavLink></li>
           <li><NavLink to="/">Log Out</NavLink></li>
           <li><NavLink to="/" className="btn btn-floating orange lighten-1">BK</NavLink></li>
       

        </span>
    )
}


export default SignedInLinks;