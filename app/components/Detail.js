import React from 'react'
import Subhead from './Subhead'
import utils from '../helpers/utils'

const Detail = ({data, title}) => {
  const styles = {
    wrapper: {
      padding: '2rem 1em',
      textAlign: 'center'
    },
    p: {
      fontSize: 'xx-large',
      fontWeight: '100',
      margin: '0 0 1rem'
    },
    icon: {
      minHeight: '8em'
    },
    details: {
      marginTop: '3rem',
      textTransform: 'lowercase'
    }
  }

  const weather = data.weather[0]
  const temp = data.temp

  return (
    <div style={styles.wrapper}>
      <img style={styles.icon} src={`./app/images/weather-icons/${weather.icon}.svg`} alt={data.description} />
      <Subhead>{utils.getDate(data.dt)}</Subhead>
      <div style={styles.details}>
        <p style={styles.p}>{title}</p>
        <p style={styles.p}>Min temp: {Math.round(temp.min)}°</p>
        <p style={styles.p}>Max temp: {Math.round(temp.max)}°</p>
        <p style={styles.p}>Humidity: {data.humidity}</p>
      </div>
    </div>
  )
}

export default Detail
