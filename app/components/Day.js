import React from 'react'
import Subhead from './Subhead'
import utils from '../helpers/utils'

const Day = props => {
  const data = props.data
  const weather = data.weather[0]

  const styles = {
    wrapper: {
      alignItems: 'center',
      color: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      margin: '0 1rem 1rem',
      textDecoration: 'none'
    },
    icon: {
      minHeight: '8em'
    }
  }

  return (
    <button onClick={props.handleClick} style={styles.wrapper}>
      <img style={styles.icon} src={`./app/images/weather-icons/${weather.icon}.svg`} alt={weather.description} />
      <Subhead>{utils.getDate(data.dt)}</Subhead>
    </button>
  )
}

Day.propTypes = {
  data: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
}

export default Day
