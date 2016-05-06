import React from 'react'

const TextField = ({ placeholder }) => {
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
      placeholder={placeholder} />
  )
}

TextField.propTypes = {
  placeholder: React.PropTypes.string
}

TextField.defaultProps = {
  placeholder: ''
}

export default TextField
