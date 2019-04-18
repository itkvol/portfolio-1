import React, { Component } from "react";
import CreateComment from "../comments/CreateComment";
import "./Dashboard.css";
import { connect } from "react-redux";
import CommentsList from "../comments/CommentsList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Game from "../game/Game";
import Weather from "../weather/Weather";

class Dashboard extends Component {
  render() {
    const { comments, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashboard-wrapper">
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6 gameplace">
              <Weather />
              <Game />
            </div>
            <div className="col s12 m6 offset">
              <div className="comments-block">
                <CreateComment />
                <CommentsList comments={comments} auth={auth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.firestore.ordered.comments,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "comments", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
