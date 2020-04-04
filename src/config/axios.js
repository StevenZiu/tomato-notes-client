// First we need to import axios.js
import axios from "axios"
// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_ENDPOINT
})

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"

export default instance
