import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import "./Navbar.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import logo from "./../images/circle-mountain-logo-vector-19145179.jpg";

class Navbar extends React.Component {
  componentDidMount() {
    var elem = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      draggable: true,
      inDuration: 250
    });
  }
  render() {
    const { auth, profile } = this.props;

    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <div>
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              <span className="logo-span">Nature Side</span>
            </Link>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <Link to="/" className="sidenav-trigger" data-target="slide-out">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">{links}</ul>
          </div>
        </nav>
        <ul className="sidenav" id="slide-out">
          {links}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
