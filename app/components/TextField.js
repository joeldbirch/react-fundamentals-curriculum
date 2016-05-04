import React from 'react'

const TextField = props => {
  const style = {
    border: '1px solid lightgrey',
    borderRadius: '3px',
    fontSize: 'small',
    padding: '1ex .5em',
    textAlign: 'center'
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
