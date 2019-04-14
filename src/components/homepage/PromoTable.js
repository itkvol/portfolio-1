import React from "react";
import "./HomePage.css";

const PromoTable = () => {
  return (
    <div className="promo-wrapper">
      <div className="container center">
        <div className="row">
          <div className="col s12 m4 l4">
            <h1>
              <i className="material-icons large red-text darken-3">explore</i>
            </h1>
            <h5>Teaches you about the world</h5>
            <p>
              “The world is a book, and those who do not travel read only a
              page.” – said Saint Augustine. Travelling can teach you more than
              any university course. You learn about the culture of the country
              you visit. If you talk to locals, you will likely learn about
              their thinking, habits, traditions and history as well.
            </p>
          </div>
          <div className="col s12 m4 l4">
            <h1>
              <i className="material-icons large red-text darken-3">language</i>
            </h1>
            <h5>Unforgettable moments and experiences</h5>
            <p>
              Some of my most cherished memories are from the times when I was
              travelling. If you travel, you can experience things that you
              could never experience at home. You may see beautiful places and
              landscapes that do not exist where you live. You may meet people
              that will change your life, and your thingking. You may try
              activities that you have never tried before.
            </p>
          </div>
          <div className="col s12 m4 l4">
            <h1>
              <i className="material-icons large red-text darken-3">
                filter_hdr
              </i>
            </h1>
            <h5>Makes you more confident and independent</h5>
            <p>
              Travelling will inevitably make you more independent and
              confident. You will realise that you can cope with a lot of
              unexpected situations. You will realise that you can survive
              without all that help that is always available for you at home.
              You will likely find out that you are much stronger and braver
              than you have expected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoTable;
