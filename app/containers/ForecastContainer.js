import React, {Component} from 'react'
import Forecast from '../components/Forecast'
import api from '../helpers/api'

export default class ForecastContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      city: ''
    }
  }

  componentDidMount () {
    this.getForecast(this.props.routeParams.city)
  }

  getForecast (city) {
    api.getCityForecast(city).then( ({data}) => {
      console.log(data)
      this.state.city = data.city.name
      this.state.loading = false
      this.setState(this.state)
    })
  }

  getCurrentWeather (city) {
  }

  render () {
    return (
      <Forecast
        title={(this.state.loading) ? 'Loading…' : this.state.city}
      />
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
