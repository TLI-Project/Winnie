import React from 'react'
import { Link } from 'react-router-dom';

class Breakdown extends React.Component {
  render() {
    return (
      <div className="Breakdown">
        <h1> Show GRAPH Breakdownwnwnwnnwnwnwnwnwnwnwnwnwnwnwnwnwnwn: </h1>
        <Link to='/cart'>
          <button>LET ME GO TO MY CART</button>
        </Link>
      </div>
    );
  }
}

export default Breakdown;