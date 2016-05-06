import React from 'react'

const Forecast = props => {
  const style = {
    padding: '2rem 1em'
  }
  return (
    <div style={style}>
      <h1 className='alpha'>{props.title}</h1>
    </div>
  )
}

export default Forecast
