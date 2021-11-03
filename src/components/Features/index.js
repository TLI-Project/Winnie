import React from 'react'
import { Link } from 'react-router-dom';
import './features.scss';

const Features = () => {
  return (
    <div className="Features">
      <h1> Browse add ons </h1>
      <Link to='/features-breakdown'>
        <button>Show me the breakdown of the features!</button>
      </Link>
    </div>
  )
}

export default Features
