import React, {Component} from 'react'
import Form from '../components/Form'

class FormContainer extends Component {

  handleSubmit (e) {
    e.preventDefault()
    console.log('submitted')
  }

  handleChange (input) {
    console.log(input)
  }

  render () {
    return (
      <Form
        style={this.props.style}
        layout={this.props.layout}
        onSubmit={this.handleSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}
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
