import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./HomePage.css";

class Homepage extends Component {
    render() {
        return (
            <div className="body-home">
                <div className="body-wrapper">
                    <div className="container center">
                        <h1>Welcome to Homepage</h1>
                        <div>
                            <NavLink to="/signin"><button id="download-button" className="btn-large orange lighten-1 waves-effect waves-light">Get Started</button></NavLink>
                        </div>
                    <h5 className="grey-text text-darken-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus nobis explicabo adipisci autem atque ullam pariatur similique, laudantium quidem maxime amet! Dicta distinctio tempora ut accusantium, eum animi rem.</h5>
                    </div>
                </div>

            </div>
        )
    }
}

export default Homepage;