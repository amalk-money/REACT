import React from 'react'

function Card(props) {
    
  return (
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatibus.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
