import http from "./http";
import config from "./config.json";

export function getGenres() {
  return http.get(config.genreApiEndpoint);
}
