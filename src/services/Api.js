import axios from 'axios';



let cliente_http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3000,
  responseType: 'json',
  responseEncoding: 'utf8',
});


export default cliente_http;
