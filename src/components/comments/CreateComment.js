import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from './../../store/actions/commentsActions';

class CreateComment extends Component {
    state = {
        title: "",
        content: ""
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
       
      this.props.createComment(this.state)
      this.setState({
          title: "",
          content: ""
      })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render(){
        return(
            
            <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Leave a comment</h5>
                <div className="input-field">
                <label htmlFor="title" className="grey-text text-darken-3">Title</label>
                <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                </div>

                <div className="input-field">
                <label htmlFor="content" className="grey-text text-darken-3">Your comment</label>
                <textarea name="" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange} value={this.state.content}></textarea>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 waves-effect waves-light">Submit
                <i className="material-icons right">send</i>
                </button>
                </div>
            </form>
            
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        createComment: (comment) => dispatch(createComment(comment))
    }
}
export default connect(null, mapDispatchToProps)(CreateComment);