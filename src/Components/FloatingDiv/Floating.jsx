import React from 'react'
import './floating.css';

function Floating({image}) {
  return (
    <div className='floatingDiv'>
        <img src={image} alt="" />
        <span>
            AI/ML
            <br />
            Enthusiast
        </span>
    </div>
  )
}

export default Floating