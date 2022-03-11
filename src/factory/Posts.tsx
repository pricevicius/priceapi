import axios from "axios";

export default axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
   timeout: 1000,
   withCredentials: false,
   headers: {
      'X-Custom-Header': 'foobar',
      'Access-Control-Allow-Origin': '*'
   }
});