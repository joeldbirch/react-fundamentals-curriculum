import React from 'react'

const Button = props => {
  const style = {
    backgroundColor: '#5cb85c',
    border: '1px solid #4cae4c',
    borderRadius: '5px',
    color: 'white',
    fontSize: 'small',
    padding: '1ex 1em',
    margin: '1ex .5em'
  }

  return (
    <button
      style={style}
      className='button'
      type={props.type}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: null
}

module.exports = Button
