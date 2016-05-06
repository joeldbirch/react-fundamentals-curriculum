import React from 'react'
import Header from './Header'

const Main = props => {
  const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div style={style}>
      <Header />
      {props.children}
    </div>
  )
}

export default Main
