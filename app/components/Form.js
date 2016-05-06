import React from 'react'
import TextField from './TextField'
import ButtonContainer from '../containers/ButtonContainer'

const Form = props => {
  const formContent = {
    display: 'flex',
    flexDirection: props.layout,
    alignItems: 'center'
  }

  return (
    <form style={props.style}>
      <div style={formContent}>
        <TextField placeholder='eg. Melbourne, Victoria' />
        <ButtonContainer type='submit'>
          Get Weather
        </ButtonContainer>
      </div>
    </form>
  )
}

Form.propTypes = {
  layout: React.PropTypes.oneOf(['row', 'column']),
  style: React.PropTypes.object
}

module.exports = Form
