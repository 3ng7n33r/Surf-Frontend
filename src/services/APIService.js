import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.2:8000/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getWaves() {
    return apiClient.get('/waves')
  }
}
