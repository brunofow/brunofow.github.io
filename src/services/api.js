import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brunofow-api.herokuapp.com'
})

export default api;