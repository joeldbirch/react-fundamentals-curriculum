import React, {Component} from 'react'
import Form from '../components/Form'
import api from '../helpers/api'

class FormContainer extends Component {

  constructor () {
    super()
    this.state = {
      city: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    api.getCurrentCityWeather(this.state.city).then(function (result) {
      console.log(result.data)
    })
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

export default FormContainer
