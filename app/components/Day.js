import React from 'react'
import Subhead from './Subhead'
import utils from '../helpers/utils'

const Day = props => {
  const weather = props.data.weather[0]

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
      minHeight: '7em'
    }
  }

  return (
    <button style={styles.wrapper}>
      <img style={styles.icon} src={`./app/images/weather-icons/${weather.icon}.svg`} alt={weather.description} />
      <Subhead>{utils.getDate(props.data.dt)}</Subhead>
    </button>
  )
}

Day.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Day
