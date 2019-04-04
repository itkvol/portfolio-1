import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <span>
       
           <li><NavLink to="/signup">Signup</NavLink></li>
           <li><NavLink to="/signin">Login</NavLink></li>

        </span>
    )
}

export default SignedOutLinks;