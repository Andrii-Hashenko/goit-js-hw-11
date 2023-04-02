import axios from 'axios';

// const axios = require('axios/dist/node/axios.cjs');

const PER_PAGE = 40;

const createOptions = options => {
  const keys = Object.keys(options);

  const parameters = `?` + keys.map(key => `${key}=${options[key]}`).join('&');

  return parameters;
};

export const getImages = (query, page = 1) => {
  const options = {
    key: '34956888-be40975c4ac5248dfcce26fa6',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: PER_PAGE,
  };

  const BASE_URL = `https://pixabay.com/api/`;

  return axios.get(BASE_URL + createOptions(options));
};
