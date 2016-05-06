import React from 'react'
import Detail from '../components/Detail'

const DetailContainer = props => {
  return (
    <Detail
      title={props.routeParams.city}
      data={props.location.state.weather}
    />
  )
}

export default DetailContainer
