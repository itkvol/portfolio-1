import React, { Component } from "react";

import M from "materialize-css/dist/js/materialize.min.js";
import image1 from "./../images/1.jpg";
import image2 from "./../images/2.jpg";
import image3 from "./../images/3.jpg";
import image4 from "./../images/4.jpg";
import image5 from "./../images/5.jpg";

class Slider extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: true,
      duration: 500,
      interval: 6000,
      height: 440
    });
    var instance = M.Slider.getInstance(elems[0]);
    instance.start();
  }

  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src={image1} alt="image1" />
            <div className="caption center-align">
              <h3>Making Travel Easy & Fun</h3>
              <h5 className="light grey-text text-lighten-3">
                Take Lots Of Epic Travel Photos
              </h5>
            </div>
          </li>
          <li>
            <img src={image2} alt="image2" />
            <div className="caption right-align">
              <h3>Travel Planning Tip</h3>
              <h5 className="light grey-text text-lighten-3">
                Read A Book About The Country
              </h5>
            </div>
          </li>
          <li>
            <img src={image3} alt="image3" />
            <div className="caption center-align">
              <h3>Useful Travel Packing Tip</h3>
              <h5 className="light grey-text text-lighten-3">
                Pack Less Stuff In Your Backpack
              </h5>
            </div>
          </li>
          <li>
            <img src={image4} alt="image4" />
            <div className="caption left-align">
              <h3>Money Saving Travel Tip</h3>
              <h5 className="light grey-text text-lighten-3">
                Go On Free Walking Tours
              </h5>
            </div>
          </li>
          <li>
            <img src={image5} alt="image5" />
            <div className="caption right-align">
              <h3>Travel Safety</h3>
              <h5 className="light grey-text text-lighten-3">
                Always Get Travel Insurance
              </h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
