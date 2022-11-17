import http from "./http";
import config from "./config.json";
import jwtDecode from "jwt-decode";


const apiEndPoint = config.apiEndPoint + "auth";
const tokenKey = "token";

http.setJWT(getJWT());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
  return;
}

export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
}

export async function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}
export default {
  login,
  logout,
  getCurrentUser,
  loginWithJWT,
  getJWT,
};
