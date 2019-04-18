import React from "react";
import "./commentsList.css";
import moment from "moment";
import { connect } from "react-redux";
import { deleteComment } from "../../store/actions/commentsActions";

const CommentsList = props => {
  let list = null;

  list =
    props.comments &&
    props.comments.map(item => {
     console.log(item);
     console.log(props);
      const handleClick = id => {
        item.authorId === props.auth.uid && props.deleteComment(id);
      };

      return (
        <li
          className="collection-item avatar"
          key={item.id}
          
        >
          <div className="message-hover" onClick={() => handleClick(item.id)}>
          {props.auth.uid === item.authorId && <i className="material-icons">highlight_off</i>}
          </div>
          <span className="circle center white-text red darken-3">
            {item.authorFirstName[0]}
            {item.authorLastName[0]}
          </span>
          <strong>
            {item.authorFirstName} {item.authorLastName}
          </strong>
          <span className="grey-text lighten-1">
            {" "}
            {moment(item.createdAt.toDate()).calendar()}
          </span>
          <p>{item.content}</p>
        </li>
      );
    });
    
  return (
    <div className="comments-list-wrapper overflow">
      
      <ul className="collection">{list}</ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: id => dispatch(deleteComment(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentsList);
