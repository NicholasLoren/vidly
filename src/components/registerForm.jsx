import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/auth";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = { data: { username: "", email: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required().min(3).label("Username"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password").min(3),
  };

  doSubmit = async () => {
    try {
      const response = await userService.registerUser(this.state.data);
      auth.loginWithJWT(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status == 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
    console.log("form submitted");
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email", "email")}
          {this.renderSubmitButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
