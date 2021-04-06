import axios from 'axios';
import { per_page } from '../lib/constants';

export const getImages = (page) => {
  const API_KEY = process.env.REACT_APP_FLICKR_KEY;
  const url = 'https://api.flickr.com/services/rest/';
  const result = axios.get(url, {
    params: {
      method: 'flickr.interestingness.getList',
      extras: 'url_n, tags, owner_name, description',
      api_key: `${API_KEY}`,
      format: 'json',
      nojsoncallback: 'true',
      page: `${page}`,
      per_page: `${per_page}`
    }
  }).then(response => response.data.photos.photo);
  return result
}