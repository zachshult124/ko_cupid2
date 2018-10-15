import React, { Component } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

import PicUploader from './pictureUploader';
import API from '../utils/API'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


class Signup extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        level: 0,
        phone: "",
        bio: "",
        age: 18,
        gender: "male",
        img: ""

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

        // call the api to create the account
        API.createAccount(this.state).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
        this.props.history.push('/home');
    };

    getPhotos = (srcs) => {
        this.setState({
            profilePic: srcs[0]
        })
        return (
            <div>

                <img src={srcs[0]} key={0} alt="profile" />

            </div>
        )
    }

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
                                    <h5 class="card-title text-center">Register</h5>
                                    <form className="form-signin">
                                        <div class="form-label-group">Name <br></br>
                                            <input
                                                value={this.state.name}
                                                name="name"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder="name"
                                            />

                                        </div>

                                        <div class="form-label-group">Bio<br></br>
                                            <textarea

                                                value={this.state.bio}
                                                name="bio"
                                                onChange={this.handleInputChange}
                                                type="text"
                                                placeholder=""
                                            />

                                        </div>
                                        <div class="form-label-group">Age<br></br>
                                            <input
                                                value={this.state.age}
                                                name="age"
                                                onChange={this.handleInputChange}
                                                type="number"
                                                placeholder=""
                                            />
                                        </div>
                                        <div class="form-label-group">Phone <br></br>
                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                value={this.state.phone}
                                                onChange={phone => this.setState({ phone })} />
                                        </div>

                                        <div class="form-label-group">
                                            <PicUploader title="profile picture" getPhotos={this.getPhotos} />
                                        </div>


                                        <button class="btn btn-lg btn-block text-uppercase" type="submit" onClick={this.handleFormSubmit}>Register</button>
                                        <Link to="/"><a class="d-block text-center mt-2 small" href="#">Login</a></Link>
                                        <hr class="my-4" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>




        );
    }
}






export default Signup;