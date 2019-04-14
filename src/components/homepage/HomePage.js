import React, { Component } from "react";

import "./HomePage.css";
import Welcome from './Welcome';
import Slider from './Slider';
import Footer from "./Footer";
import PromoTable from "./PromoTable";



class Homepage extends Component {
    render() {
        return (
            <div className="homepage-wrapper">
                <Welcome />
                <Slider />
                <PromoTable />
                <Footer />
            </div>
            
        )
    }
}

export default Homepage;