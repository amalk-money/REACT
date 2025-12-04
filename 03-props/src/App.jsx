import React from 'react'
import Card from './components/Card'


function App() {
  return (
    <div className='parent'>
      <Card user='Amal' age={18} img='https://images.unsplash.com/photo-1752061159819-f290b8f48b08?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Aman' age={28} img='https://images.unsplash.com/photo-1763411711221-40166c5e20cd?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
