import React from 'react'
import card from './components/Card.jsx'

const App = () => {
  return (
    <div>
      <h1>Hi, I'm App.</h1>
      {card()}
      {card()}
      {card()}
    </div>

  )
}

export default App