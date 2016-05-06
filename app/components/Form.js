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
    <form style={props.style} onSubmit={props.onSubmit}>
      <div style={formContent}>
        <TextField
          placeholder='eg. Melbourne, Victoria'
          handleChange={props.handleChange}
          align={props.layout === 'column' ? 'center' : 'left'}
        />
        <ButtonContainer type='submit'>
          Get Weather
        </ButtonContainer>
      </div>
    </form>
  )
}

Form.propTypes = {
  layout: React.PropTypes.oneOf(['row', 'column']),
  style: React.PropTypes.object,
  onSubmit: React.PropTypes.func.isRequired
}

module.exports = Form
