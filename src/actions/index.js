import axios from 'axios';

const WEATHER_API_KEY = '9869f5227d18a448a0eac8f8f66e4893';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+WEATHER_API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = ROOT_URL+'&q='+city+',in';
    // ES5 syntax
    // const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    return {
        type : FETCH_WEATHER,
        payload : request
    };
}