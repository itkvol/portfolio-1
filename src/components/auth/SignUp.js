import React, { Component } from "react";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: ""
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phone: ""
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
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                </div>

                <div className="input-field">
                <label htmlFor="password">Passsword</label>
                <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                </div>

                <div className="input-field">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                </div>

                <div className="input-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                </div>

                <div className="input-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" onChange={this.handleChange} value={this.state.phone}/>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
            </div>
        )
    }
}

export default SignUp;