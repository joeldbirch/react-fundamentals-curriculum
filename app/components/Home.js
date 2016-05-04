import React from 'react'
import Form from './Form'

const Home = props => {
  const style = {
    wrapper: {
      backgroundColor: '#FD7F37',
      backgroundImage: "url('/app/images/pattern.svg')",
      backgroundSize: 'cover',
      color: 'white',
      display: 'flex',
      flex: 1,
      justifyContent: 'center'
    },

    content: {
      margin: 'auto',
      textAlign: 'center'
    },

    form: {
      transform: 'scaleX(.95)'
    }
  }

  return (
    <div style={style.wrapper}>
      <div style={style.content}>
        <h1 className='alpha'>{props.message}</h1>
        <Form style={style.form} />
      </div>
    </div>
  )
}

Home.defaultProps = {
  message: 'Enter a City and State'
}

module.exports = Home
