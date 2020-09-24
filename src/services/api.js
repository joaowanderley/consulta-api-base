import axios from 'axios'
const server = axios.create({
  baseURL: 'https://randomuser.me/api/?results=20'
})

export default server
