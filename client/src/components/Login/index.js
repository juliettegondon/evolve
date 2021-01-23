import React, { Component } from 'react'
import logo from './evolve_logo.png'; // with import
import { withRouter} from 'react-router-dom'
// import Hero from '../Hero'
//import { withRouter, Link } from 'react-router-dom'
//need to confirm api/auth route
//import { signIn } from '../../api/auth'
import axios from "axios"

class LoginForm extends Component {
    state = {
        loggedIn: false,
        email: "",
        password: "",
        loginDate: "",
        userName:''
    }

maskPassword = event =>{

    // let date = new Date().toJSON().substring(0, 10)


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
        console.log('email: ' + this.state.email);
        console.log('password: ' +this.state.password);
        console.log('logged in status: ' + this.state.loggedIn);
        let date = new Date().toJSON().substring(0, 10);
        this.setState({loginDate: date})
        console.log('Login date: ' + date)
        console.log('Login date: ' + this.state.loginDate)
        let key = this.state.email + this.state.password;
        console.log('Key: ' + key)
        this.setState({
            redirectTo: '/'
        })

axios.get('/api/user/'+ this.state.email)
    .then (response => {
        console.log(response)
        if (response.data) {
            this.setState({loggedIn: true})
            console.log('Display name: ' + response.data.displayName)
            sessionStorage.setItem('loginStatus', this.state.loggedIn)
            sessionStorage.setItem('user', response.data.displayName)
            sessionStorage.setItem('email', response.data.email)
            sessionStorage.setItem('fullName', response.data.name)           
            console.log('successful signup')
            console.log('logged in status: ' + this.state.loggedIn)
            alert('Welcome to Evolve !')
            this.props.history.push('/landing')
            } 
        else {
            alert('Sign-in unsuccessful, please try again or Sign-up if new to E-Volve')
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
               
                    <div className="col-md-9 pt-4 d-flex flex-wrap justify-content-around">
    <img src={logo} width="150" height="150" alt={logo} />     
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
                        <p>
              Welcome to E-Volve. Live life with less stress, while actively working 
              on your personal wellness evolution. Stronger. Healthier. More resilient. Happier.
              Manage it all, right here. 
              Whether you want to get into better physical shape, 
              become more mindful and manage feelings and thoughts, or even keep track of your health data and informatics, 
              let E-Volve be your private online journal and resource library.
            </p>
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