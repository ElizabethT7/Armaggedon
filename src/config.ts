import { getDate } from './utils';
const API_KEY = 'cO2ZVZb9AbWyTKobNe1Umdwb45J9EuvJvUQHrhj5' //process.env.APP_API_KEY;

const START_DATE = getDate();
console.log(START_DATE)

const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${getDate()}&api_key=${API_KEY}`;

export {
  API_KEY,
  API_URL,
  START_DATE
}