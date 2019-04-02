import React, { Component } from "react";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            email: "",
            password: ""
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
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                </div>

                <div className="input-field">
                <label htmlFor="password">Passsword</label>
                <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 z-depth-0">Sign In</button>
                </div>
            </form>
            </div>
        )
    }
}

export default SignIn;