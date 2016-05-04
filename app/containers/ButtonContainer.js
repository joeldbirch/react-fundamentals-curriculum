import React from 'react'
import Button from '../components/Button'

const ButtonContainer = props => {
  return (
    <Button type={props.type}>
      {props.children}
    </Button>
  )
}

ButtonContainer.propTypes = {
  type: React.PropTypes.string
}

module.exports = ButtonContainer
