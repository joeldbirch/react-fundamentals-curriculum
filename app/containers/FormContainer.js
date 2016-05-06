import React, {Component} from 'react'
import Form from '../components/Form'

class FormContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      city: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.context.router.push(`/forecast/${this.state.city}`)
  }

  handleChange (input) {
    this.setState({
      city: input
    })
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

FormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default FormContainer
