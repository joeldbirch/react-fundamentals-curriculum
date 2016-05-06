import React, {Component} from 'react'
import Form from '../components/Form'

class FormContainer extends Component {

  render () {
    return (
      <Form
        style={this.props.style}
        layout={this.props.layout}
      />
    )
  }
}

FormContainer.propTypes = {
  layout: React.PropTypes.oneOf(['row', 'column']),
  style: React.PropTypes.object
}

FormContainer.defaultProps = {
  layout: 'column',
  style: null
}

export default FormContainer
