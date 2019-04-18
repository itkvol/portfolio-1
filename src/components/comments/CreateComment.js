import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "./../../store/actions/commentsActions";
import "./commentsList.css";

class CreateComment extends Component {
  state = {
    content: ""
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.createComment(this.state);

    this.setState({
      content: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <h5>Leave a comment</h5>

        <div className="input-field">
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={this.handleChange}
            value={this.state.content}
            required
          />
        </div>

        <div className="input-field">
          <button className="btn orange lighten-1 waves-effect waves-light">
            comment
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
      
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateComment);
