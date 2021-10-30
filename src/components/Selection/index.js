import React from 'react'
import { Link } from 'react-router-dom';

class Selection extends React.Component {
  render() {
    return (
      <div className="Selection">
        <h1> User browses and select wanted cars here: </h1>
        <h3> After they pick the cars they want, they fill out their financing info.</h3>
        <Link to='/finance'>
          <button>Fill in my info</button>
        </Link>
      </div>
    );
  }
}

export default Selection;