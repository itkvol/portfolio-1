import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <span>
       
           <li><NavLink to="/signup" className="sidenav-close">Signup</NavLink></li>
           <li><NavLink to="/signin" className="sidenav-close">Login</NavLink></li>

        </span>
    )
}

export default SignedOutLinks;