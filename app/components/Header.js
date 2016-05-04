import React from 'react'
import Form from './Form'

const Header = props => {
  const style = {
    header: {
      alignItems: 'center',
      background: 'rgba(252, 90, 44, 0.89)',
      color: 'white',
      display: 'flex',
      padding: '1ex'
    },

    form: {
      marginLeft: 'auto',
      transform: 'scaleX(.95)',
      transformOrigin: 'right'
    },

    title: {
      fontWeight: '400',
      letterSpacing: '-1px',
      margin: 0
    }

  }

  return (
    <header style={style.header}>
      <h1 style={style.title}>Should I get up today?</h1>
      <Form style={style.form} layout='row' />
    </header>
  )
}

module.exports = Header
