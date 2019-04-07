import React, { Component } from "react";
import "./SignIn.css";
import { connect } from 'react-redux';
import { signIn } from './../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signIn(this.state);
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
        const { authError } = this.props;
        
        const { auth } = this.props;
        if (auth.uid) return <Redirect to="/dashboard" />
        return(
            <div className="sign-in">
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                <label htmlFor="email" className="grey-text text-darken-3">E-mail</label>
                <input type="email" id="email" className="validate" onChange={this.handleChange} value={this.state.email}/>
                
                </div>

                <div className="input-field">
                <label htmlFor="password" className="grey-text text-darken-3">Passsword</label>
                <input type="password" id="password" className="validate" onChange={this.handleChange} value={this.state.password}/>
                </div>

                <div className="input-field">
                <button className="btn orange lighten-1 waves-effect waves-light">Login</button>
                <div className="red-text center">
                    <strong>{ authError ? <p>{authError}</p> : null}</strong>
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);