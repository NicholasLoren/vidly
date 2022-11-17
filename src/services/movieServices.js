import http from "./http";
import config from "./config.json";

export function getMovies() {
  return http.get(config.moviesApiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(config.moviesApiEndpoint + "/" + movieId);
}

export function getMovie(movieId) {
  return http.get(config.moviesApiEndpoint + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    return http.put(config.moviesApiEndpoint + "/" + movie._id, body);
  }
  return http.post(config.moviesApiEndpoint, movie);
}
