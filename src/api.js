// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:8080/webservice/api/TCntrcliente'
// });

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL:  "http://localhost:8080/webservice/api/TCntrcliente/cliente",
});

api.interceptors.request.use(async (config) => {
  const conf = config;

  conf.headers["Content-Type"] = "application/json;charset=UTF-8";
  conf.headers["Access-Control-Allow-Origin"] = "*";
  conf.headers["Access-Control-Allow-Headers"] =
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept";
  conf.headers["Access-Control-Allow-Methods"] =
    "GET, POST, OPTIONS, PUT, PATCH, DELETE";
  conf.headers["Access-Control-Allow-Credentials"] = true;
  conf.headers["Allow"] = "GET, POST, PUT, DELETE, OPTIONS, HEAD";

  return conf;
});

export default api;
