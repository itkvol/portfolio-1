import React, { Component } from "react";

class CreateComment extends Component {
    state = {
        title: "",
        content: ""
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Leave a comment</h5>
                <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange} value={this.state.title}/>
                </div>

                <div className="input-field">
                <label htmlFor="content">Your comment</label>
                <textarea name="" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange} value={this.state.content}></textarea>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 waves-effect waves-light">Submit
                <i className="material-icons right">send</i>
                </button>
                </div>
            </form>
            </div>
        )
    }
}

export default CreateComment;