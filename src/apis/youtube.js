import axios from 'axios';

const KEY = 'AIzaSyAT1CQLAn6_0M2gDpW3GfTng4yqORLrFKU';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY


  }

});