import axios from 'axios'

const apiKey = 'c4e386d5aa9717b232a9d0488d492818'

const helpers = {

  getCityForecast (city) {
    // get 5 day forecast for city via API
    // http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
    // my API key is: c4e386d5aa9717b232a9d0488d492818
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&type=accurate&APPID=${apiKey}&cnt=5`)
  },

  getCurrentCityWeather (city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=accurate&APPID=${apiKey}`)
  }

}

export default helpers
