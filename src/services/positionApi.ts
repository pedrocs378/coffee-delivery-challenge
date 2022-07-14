import axios from 'axios'

export const positionApi = axios.create({
  baseURL: 'http://api.positionstack.com/v1/',
  params: {
    access_key: import.meta.env.VITE_POSITION_API_ACCESS_KEY,
  },
})
