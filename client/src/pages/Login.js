import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";


import API from '../utils/API'



class Login extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        password: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: "",
            lastName: ""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <body>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-9 mx-auto">
                            <div class="card card-signin flex-row my-5">
                                <div class="card-img-left d-none d-md-flex">

                                </div>
                                <div class="card-body overflown">
                                    <h5 class="card-title text-center">Login</h5>
                                    <form className="form-signin">
                                        <div class="form-label-group">First Name <br></br>
                                            <input
                                                value={this.state.name}
                                                name="name"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder=" first name"
                                            />

                                        </div>

                                        <div class="form-label-group">Last Name <br></br>
                                            <input
                                                value={this.state.password}
                                                name="name"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="last name"
                                            />

                                        </div>



                                        <Link to="/home"> <button class="btn btn-lg btn-block text-uppercase" type="submit" >Login</button></Link>
                                        <Link to="/signup"><a class="d-block text-center mt-2 small" href="#">Signup</a></Link>
                                        <hr class="my-4" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </body >




        );
    }
}


export default Login;