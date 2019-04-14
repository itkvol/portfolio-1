import React from 'react';
import { NavLink } from 'react-router-dom';
import "./HomePage.css";


const Welcome = () => {
  return (
    <div className="welcome" >
      <div className="filter">

                    <div className="container center">
                <div className="welcome-wrapper">
                        <h1>Welcome to Nature Side</h1>
                        <div>
                            <NavLink to="/dashboard"><button id="download-button" className="btn-large orange lighten-1 waves-effect waves-light">Get Started</button></NavLink>
                        </div>
                    <h5>There's no time like the present.</h5>
                    </div>
                </div>

            </div>
      </div>
    
  )
}

export default Welcome;
