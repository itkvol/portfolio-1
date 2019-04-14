import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <span>
      <li>
        <NavLink to="/dashboard" className="sidenav-close">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="sidenav-close" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating orange lighten-1 sidenav-close"
        >
          {props.profile.initials}
        </NavLink>
      </li>
    </span>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
