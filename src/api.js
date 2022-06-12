import axios from 'axios';
const client = axios.create({
  baseURL: 'https://api.outsidein.dev/UmCSRjYkCH36JIDQKTGRP6fSvqJQs7KD',
});
const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};
export default api;