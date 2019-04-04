import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import "./Navbar.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";




class Navbar extends Component {
   
 componentDidMount() {
     var elem = document.querySelectorAll(".sidenav");
     M.Sidenav.init(elem, {
         edge: "left",
         inDuration: 250
     });
     
 }
    render(){
       
        
        
        return(
            <div>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">My site</Link>
                    <Link to='/' className="sidenav-trigger" data-target="slide-out">
                    <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <SignedOutLinks />
                        <SignedInLinks />
                    </ul>
                    
                    
                </div>
            </nav>
                <ul className="sidenav" id="slide-out">
                    <SignedOutLinks />
                    <SignedInLinks />
  
                </ul>
    
            </div>
        )
    }
}

export default Navbar;