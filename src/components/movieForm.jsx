import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "./../services/genreServices";
import { getMovie, saveMovie } from "./../services/movieServices";

class MovieForm extends Form {
  state = {
    data: {
      genreId: "",
      title: "",
      dailyRentalRate: "",
      numberInStock: "",
    },
    errors: {},
    genres: [],
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    dailyRentalRate: Joi.number().required().label("Rate").min(0).max(10),
    numberInStock: Joi.number().required().label("Stock").min(0).max(100),
    genreId: Joi.string().required().label("Genre"),
  };

  componentDidMount = async () => {
    const { data: genres } = await getGenres();
    this.setState({ genres });

    const { match, history } = this.props;
    const movieId = match.params.id;

    if (movieId == "new") return;

    const { data: movie } = await getMovie(movieId);

    if (!movie) return history.replace("/not-found");

    this.setState({ data: this.mapModelToView(movie) });
  };

  mapModelToView = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock,
    };
  };

  doSubmit = async () => {
    const { history } = this.props;
    await saveMovie(this.state.data);

    history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movies Form</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderSubmitButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
