import React, { Component } from "react";
import "./SignUp.css";
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
            <div className="sign-up">

            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                <label htmlFor="email" className="grey-text text-darken-3" >E-mail</label>
                <input type="email" id="email" className="validate" onChange={this.handleChange} value={this.state.email}/>
                </div>

                <div className="input-field">
                <label htmlFor="password" className="grey-text text-darken-3">Passsword</label>
                <input type="password" id="password" className="validate" onChange={this.handleChange} value={this.state.password}/>
                </div>

                <div className="input-field">
                <label htmlFor="firstname" className="grey-text text-darken-3">First Name</label>
                <input type="text" id="firstName" className="validate" onChange={this.handleChange} value={this.state.firstName}/>
                </div>

                <div className="input-field">
                <label htmlFor="lastname" className="grey-text text-darken-3">Last Name</label>
                <input type="text" id="lastName" className="validate" onChange={this.handleChange} value={this.state.lastName}/>
                </div>

                <div className="input-field">
                <label htmlFor="phone" className="grey-text text-darken-3">Phone</label>
                <input type="tel" id="phone" className="validate" onChange={this.handleChange} value={this.state.phone}/>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 waves-effect waves-light">Sign Up</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

export default SignUp;