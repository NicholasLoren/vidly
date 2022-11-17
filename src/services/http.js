import axios from "axios";
import logger from "./loggerServices";
import { toast } from "react-toastify"; 


export function setJWT(jwt){
  axios.defaults.headers.common["x-auth-token"] = jwt;
}
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("Something unexpected happened");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT
};
