import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="about-wrapper">
        <div className="container">
            <h3 className="center">About company</h3>
            <p>Company was found in 2011 in Lviv, Ukraine as travel agency.   </p>
            <h5>Who we are</h5>
            <p>We are a highly experienced Destination Management Company and Tour Operator in European countries and the United States of America. We have offices in Amsterdam, Rome, Berlin and New Jersey.</p>
            <h5>What we do</h5>
            <p>Our primary goal is to provide our business partners a very high quality service.</p>
            <h5>Who our customers are</h5>
            <p>Regular customers of Nature Side company, who cooperate under a corporate service agreement, could be found not only in Lviv offices but in many other regions of the world as well. The corporate service agreement allows you to get everything your employees need for business trips, in the comfort of your office.</p>
            <h5>Our plans</h5>
            <p>Nature Side remains a company of and for travelers. The way we travel is as important to us as the places we go, and we are constantly innovating, searching out new adventures, and finding ways to improve established trips. Many of our tours take place in the less explored parts of the world, in the places where few foreigners have been before.</p>
            <h5>Contact information</h5>
            <h6><u>Phone:</u></h6>
            <p><strong>555-555</strong></p>
            <h6><u>E-mail:</u></h6>
            <p><strong>test@test.ua</strong></p>
            <p className="center">Thank you for visiting our website, we look forward to the opportunity to serve all your travel needs.</p>
        </div>
        <div className="about-footer center">
            <p></p>
        <a href="mailto:banderos1979@gmail.com">CONTACT US</a>
        <i className="fab fa-twitter" />
            <i className="fab fa-facebook-f" />
            <a
              href="https://github.com/itkvol/portfolio-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-youtube" />
        </div>
        </div>
    )
}

export default About;