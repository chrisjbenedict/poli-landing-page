import React from 'react';
import * as Icon from 'react-feather'

const IconCard = ({ name, icon }) => {

  function renderColor() {
    return name === 'Win' ? 'gold' : 'blue'
  }

  function makeBold() {
    return name === 'Win' ? <strong>Win</strong> : name
  }

  return(
    <div className="card"
      style={{
        width: "10vw",
        boxShadow: '5px 5px 5px grey',
        margin: '1vw',
        backgroundColor: 'white',
        fontSize: '1rem',
        borderRadius: 0
      }}
      >
      <div className="card-body">
        <div style={{color: renderColor()}}>
          {icon}
        </div>
        <p className="card-text">{makeBold()}</p>
      </div>
    </div>
  )
}

export default IconCard
