import React from 'react'
import Subhead from './Subhead'

const Forecast = props => {
  const styles = {
    wrapper: {
      padding: '2rem 1em'
    },
    forecast: {
      display: (props.loading) ? 'none' : 'block',
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
      <div aria-live={(props.loading) ? null : 'polite'} className='forecast' style={styles.forecast}>
        <Subhead>Select a day</Subhead>
        <div style={styles.days}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Forecast
