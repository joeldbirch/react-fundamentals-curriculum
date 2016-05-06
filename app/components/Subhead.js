import React from 'react'

const Subhead = props => {
  const style = {
    fontSize: 'xx-large',
    fontWeight: '100',
    margin: '1rem',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  }
  return <h2 style={style}>{props.children}</h2>
}

export default Subhead
