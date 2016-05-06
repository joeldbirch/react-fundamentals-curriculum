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

  const handleChange = function (e) {
    props.handleChange(e.target.value)
  }

  return (
    <input
      style={style}
      type='text'
      placeholder={props.placeholder}
      onChange={handleChange}
    />
  )
}

TextField.propTypes = {
  placeholder: React.PropTypes.string,
  handleChange: React.PropTypes.func
}

TextField.defaultProps = {
  placeholder: ''
}

export default TextField
