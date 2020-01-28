import axios from 'axios'

import {
  token,
  connection
} from './incereptors'

const instance = axios.create({
  baseURL: 'http://localhost:3012',
  headers: {},
  data: {}
})

token(instance)
connection(instance)

export default instance
