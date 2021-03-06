import React from 'react'

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
    }
  }

  return (
    <div style={style.wrapper}>
      <div style={style.content}>
        <h1 className='alpha'>{props.message}</h1>
        {props.children}
      </div>
    </div>
  )
}

Home.propTypes = {
  message: React.PropTypes.string
}

Home.defaultProps = {
  message: 'Enter a City and State'
}

export default Home
