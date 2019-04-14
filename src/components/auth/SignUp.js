import React, { Component } from "react";
import "./SignUp.css";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from './../../store/actions/authActions';


class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        email && password && firstName && lastName && this.props.signUp(this.state)
       
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render(){
        const { signUpError } = this.props;
        const { auth } = this.props;
        if (auth.uid) return <Redirect to="/dashboard" />
        return(
            <div className="sign-up">

            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h5>Sign Up</h5>
                <div className="input-field">
                <label htmlFor="email" className="grey-text text-darken-1" >E-mail <span>*</span></label>
                <input type="email" id="email" className="validate" onChange={this.handleChange} value={this.state.email} required/>
                </div>

                <div className="input-field">
                <label htmlFor="password" className="grey-text text-darken-1">Passsword <span>*</span></label>
                <input type="password" id="password"  onChange={this.handleChange} value={this.state.password} required/>
                </div>

                <div className="input-field">
                <label htmlFor="firstname" className="grey-text text-darken-1">First Name <span>*</span></label>
                <input type="text" id="firstName" className="validate" onChange={this.handleChange} value={this.state.firstName} required/>
                </div>

                <div className="input-field">
                <label htmlFor="lastname" className="grey-text text-darken-1">Last Name <span>*</span></label>
                <input type="text" id="lastName" className="validate" onChange={this.handleChange} value={this.state.lastName} required/>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 waves-effect waves-light">Sign Up</button>
                <div className="red-text center">
                   <strong>{ signUpError ? <p>{signUpError}</p> : null}</strong> 
                </div>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signUpError: state.auth.signUpError,
        auth: state.firebase.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);