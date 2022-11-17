import http from "./http";
import config from "./config.json";

export function registerUser(user) {
  return http.post(config.apiEndPoint  + "users", {
    name: user.username,
    email: user.email,
    password: user.password,
  });
}
