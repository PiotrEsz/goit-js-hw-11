export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39493730-2b7f664c84691fe9cb5103ec9';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};
