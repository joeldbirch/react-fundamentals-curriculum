import React from 'react'

const TextField = props => {
  const style = {
    border: '1px solid lightgrey',
    borderRadius: '5px',
    fontSize: '.875em',
    padding: '1ex .5em',
    textAlign: 'center',
    width: '12em'
  }
  return (
    <input
      style={style}
      type='text'
      placeholder={props.placeholder} />
  )
}

TextField.defaultProps = {
  placeholder: ''
}

module.exports = TextField
