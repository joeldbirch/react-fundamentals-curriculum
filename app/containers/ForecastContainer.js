import React, {Component} from 'react'
import api from '../helpers/api'
import Forecast from '../components/Forecast'
import Day from '../components/Day'

class ForecastContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      forecast: {}
    }
  }

  componentDidMount () {
    this.getForecast(this.props.routeParams.city)
  }

  componentWillReceiveProps (nextProps) {
    this.getForecast(nextProps.routeParams.city)
  }

  getForecast (city) {
    api.getCityForecast(city).then(({data}) => {
      this.state.forecast = data
      this.state.isLoading = false
      this.setState(this.state)
    })
  }

  getDays () {
    if (!this.state.isLoading) {
      return this.state.forecast.list.map((day) => {
        return (
          <Day
            key={day.dt}
            data={day}
            handleClick={this.handleDayClick.bind(this, day)}
          />
        )
      })
    } else {
      return null
    }
  }

  handleDayClick (weather) {
    this.context.router.push({
      pathname: `/detail/${this.state.forecast.city.name}`,
      state: {
        weather: weather
      }
    })
  }

  render () {
    return (
      <Forecast
        title={(this.state.isLoading) ? 'Loading…' : this.state.forecast.city.name}
        isLoading={this.state.isLoading}>
        {this.getDays()}
      </Forecast>
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ForecastContainer
