import React from 'react'
import Main from '../components/Main'

const MainContainer = props => {
  return (
    <Main>
      {props.children}
    </Main>
  )
}

module.exports = MainContainer
