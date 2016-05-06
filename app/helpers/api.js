import axios from 'axios'

const apiKey = 'c4e386d5aa9717b232a9d0488d492818'

const helpers = {

  getCityForecast (city) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&type=accurate&APPID=${apiKey}&cnt=5`).catch( err => console.log(err) )
  }

}

export default helpers
