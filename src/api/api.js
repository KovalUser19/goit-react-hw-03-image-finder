import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pixabay.com/api/',
  /* apiKEY: '40367315-3c91d510b26c4724b33f253c9', */

})