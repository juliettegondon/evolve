import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        name: "",
        email: "",
        username: "",
        password: "",
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    sendFormData = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <div className="row pt-4" >
                    <div className="col-md-8 pt-4 d-flex flex-wrap justify-content-around">
  
                        <div className="jumbotron">
                            <h1 className="display-4">Sign Up For An Account</h1>
                            <p className="lead">Enter your information below to sign up for an account.</p>
                            <hr className="my-4"></hr>
                            <form>
  
                                <div className="form-group">
                                    <label htmlFor="username">Name</label>
                                    <input type="text"
                                        className="form-control"
                                        name="contact"
                                        value={this.state.contact}
                                        onChange={this.handleInputChange}
                                        id="contact"
                                        placeholder="Name">
  
                                    </input>
                                </div>
  
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        id="email"
                                        placeholder="Email">
  
                                    </input>
                                </div>
  
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        id="name"
                                        placeholder="Username">
  
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
                                    // do we want to have the button disabled if all fields are not filled in? disabled={}
                                    onClick={this.sendFormData}
                                >Submit</button>
                            </form>
  
                        </div>
                    </div>
                    <div className="col-md-4 pt-4">
                        <Contacts />
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default LoginForm;