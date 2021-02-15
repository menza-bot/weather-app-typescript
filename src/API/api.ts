import { WeatherResponseData } from './../types';
import axios from 'axios'
import { error } from 'console';








export const weatherAPI = {
    async getWeather(city: string) {
    
            let response = await axios.get<WeatherResponseData>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=206e07aeba61aef2cf0563b1867e2826`)
            return response
        
    }
}




