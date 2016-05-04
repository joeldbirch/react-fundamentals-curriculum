import React from 'react'

const Main = props => {
  const style = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

module.exports = Main
