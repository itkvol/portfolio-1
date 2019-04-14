import React from "react";
import "./HomePage.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container center">
        <div className="row">
          <div className="col s12 m6">
            <p>This site was created for demonstration purposes. </p>
            <p>
              The story, all names, characters, and incidents portrayed in this
              production are fictitious.{" "}
            </p>
          </div>
          <div className="col s12 m6">
            <p>Follow Nature Side on</p>
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
      </div>
      <div className="bottom-line">Nature Side 2019</div>
    </div>
  );
};

export default Footer;
