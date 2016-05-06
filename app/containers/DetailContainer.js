import React, {Component} from 'react'
import Detail from '../components/Detail'

export default class DetailContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.location.state.weather)
    return (
      <Detail
        title={this.props.routeParams.city}
        data={this.props.location.state.weather}
      />
    )
  }

}
