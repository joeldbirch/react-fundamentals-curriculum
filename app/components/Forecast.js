import React from 'react'
import Subhead from './Subhead'

const Forecast = props => {
  const styles = {
    wrapper: {
      padding: '2rem 1em'
    },
    forecast: {
      margin: '2rem 0'
    },
    days: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '4rem 0'
    }
  }

  return (
    <div style={styles.wrapper}>
      <h1 className='alpha'>{props.title}</h1>
      {
        (props.isLoading)
        ? null
        : <ForecastUI styles={styles} children={props.children} />
      }
    </div>
  )
}

const ForecastUI = ({styles, children}) => {
  return (
    <div style={styles.forecast} aria-live='polite'>
      <Subhead>Select a day</Subhead>
      <div style={styles.days}>
        {children}
      </div>
    </div>
  )
}

export default Forecast
