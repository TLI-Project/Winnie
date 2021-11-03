import React from 'react'
import { Link } from 'react-router-dom';

const Breakdown = () => {
  return (
    <div className="Breakdown">
    <h1> Show graph breakdown: </h1>
    <Link to='/cart'>
      <button>Go to cart</button>
    </Link>
  </div>
  )
}

export default Breakdown

/* Needs work on the skeleton for showing the graphical breakdown*/