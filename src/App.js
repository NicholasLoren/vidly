import React, { Component } from "react";
import NavBar from "./components/common/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Rentals from "./components/rentals";
import Movies from "./components/movies";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/auth";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <div className="container">
        <ToastContainer />
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies}></Route>
          <Redirect to="/not-found"></Redirect>
          <Redirect from="/" to="/movies" />
        </Switch>
      </div>
    );
  }
}

export default App;
