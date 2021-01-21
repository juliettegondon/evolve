import React, { Component } from 'react'
import logo from './evolve_logo.png'; // with import
import { withRouter} from 'react-router-dom'
//import { withRouter, Link } from 'react-router-dom'
//need to confirm api/auth route
//import { signIn } from '../../api/auth'
import axios from "axios"

class LoginForm extends Component {
    state = {
        loggedIn: false,
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    gotoSignUp = () => {
        this.props.history.push('/signup')
    }
    
    sendFormData = event => {
        event.preventDefault();
        console.log('handleSubmit')
        console.log(this.state.email);
        console.log(this.state.password);
        this.setState({
            redirectTo: '/'
        })

axios.get('/api/user/'+ this.state.email)
    .then (response => {
        console.log(response)
        if (response.data) {
            console.log('successful signup')
            alert('Welcome to Evolve !')
            this.props.history.push('/landing')
            } 
        else {
            console.log('Sign-up error')
        }
    })
    .catch(error => {
        console.log('Sign up server error: ')
        console.log(error)
    })
        }

    render() {
        return (
            <div>
                <div className="row pt-4" >
               
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">
    <img src={logo} width="175" height="175" alt={logo} />     
                        <div className="jumbotron">
                            <h1 className="display-4"><b>Login</b></h1>
                            <p className="lead">Enter username/password below to login.</p>
                            <hr className="my-4"></hr>
                            <form>

                                <div className="form-group">

                                    <label htmlFor="username">email</label>

                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        id="email"
                                        placeholder="email">

                                    </input>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>

                                    <input type="password"

                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        id="password"
                                        placeholder="Password">

                                    </input>
                                </div>

                                <button type="submit"
                                    className="btn btn-primary myButton"
                                        onClick={this.sendFormData}
                                >Submit</button>

                                <button type="signup"
                                    className="btn btn-primary myButton ml-3"
                                        onClick={this.gotoSignUp}
                                >Sign Up</button>

                            </form>

                        </div>
                    </div>
                    <div className="col-md-4 pt-4">
                        {/* <Contacts /> */}
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(LoginForm);