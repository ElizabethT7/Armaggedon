import { getDate, getNextDate } from './utils';
const API_KEY = 'cO2ZVZb9AbWyTKobNe1Umdwb45J9EuvJvUQHrhj5' //process.env.NEXT_PUBLIC_API_KEY;

const START_DATE = getDate();
const END_DATE = START_DATE;

const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed';

export {
  API_KEY,
  START_DATE,
  END_DATE,
  BASE_URL
}