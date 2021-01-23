import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import logo from './evolve_logo.png'; // with import
// import { withRouter, Link } from 'react-router-dom'
//need to confirm api/auth route
//import { signIn } from '../../api/auth'
import axios from "axios"
// import Landing from 'Landing'



class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        displayName: "",
        password: "",
        userID: "",
        enrollDate: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    sendFormData = event => {
        event.preventDefault();
        let userID = Math.floor((Math.random() * 100000000000) + 10000)
        console.log('handleSubmit')
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.displayName);
        console.log(this.state.password);
        console.log(userID);
        let date = new Date().toJSON().substring(0, 10);
        this.setState({enrollDate: date})
        this.setState({
            redirectTo: '/'
        })

axios.post('/api/user',{
    name: this.state.name,
    email: this.state.email,
    displayName: this.state.displayName,
    password: this.state.password,
    userID: userID,
    enrollDate: date,
})
    .then (response => {
        console.log(response)
        if (response.data) {
            console.log('successful signup')
            alert('Welcome to Evolve !')
            sessionStorage.setItem('loginStatus', this.state.loggedIn)
            sessionStorage.setItem('user', response.data.displayName)
            sessionStorage.setItem('email', response.data.email)
            sessionStorage.setItem('email', response.data.userID)
            this.props.history.push('/landing')
            } 
        else {
            alert('Passwords need to be at least 5 characters, please try again')
            console.log('Sign-up error')
        }
    })
    .catch(error => {
        alert('Passwords need to be at least 5 characters, please try again')
        console.log('Sign up server error: ')
        console.log(error)
    })
        }

    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-9 pt-4 d-flex flex-wrap justify-content-around">
    <img src={logo} width="175" height="175" alt={logo} />
                    <div className="jumbotron">
                        <h1 className="display-4"><b>Sign Up</b></h1>
                        <p className="lead">Enter your information below to sign up.</p>
                        <hr className="my-4"></hr>

                    <form>
                        <div className="form-group">

                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                id="name"
                                placeholder="Name">

                            </input>
                        </div>
                            
                        <div className="form-group">
                            <label htmlFor="email">e-mail</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                id="email"
                                placeholder="e-mail">

                            </input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="displayName">Display Name</label>
                            <input type="displayName"
                                className="form-control"
                                name="displayName"
                                value={this.state.displayName}
                                onChange={this.handleInputChange}
                                id="displayName"
                                placeholder="Display Name">

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

export default withRouter(SignUpForm);