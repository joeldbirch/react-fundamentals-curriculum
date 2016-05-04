import React from 'react'
import TextField from './TextField'
import ButtonContainer from '../containers/ButtonContainer'

const Home = props => {
  const wrapper = {
    backgroundColor: '#FD7F37',
    backgroundImage: "url('/app/images/pattern.svg')",
    backgroundSize: 'cover',
    color: 'white',
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  }

  const content = {
    margin: 'auto',
    textAlign: 'center'
  }

  const formContent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <div style={wrapper}>
      <div style={content}>
        <h1 className='alpha'>{props.message}</h1>
        <form>
          <div style={formContent}>
            <TextField placeholder='eg. Melbourne, Victoria' />
            <ButtonContainer type='submit'>
              Get Weather
            </ButtonContainer>
          </div>
        </form>
      </div>
    </div>
  )
}

Home.defaultProps = {
  message: 'Enter a City and State'
}

module.exports = Home
