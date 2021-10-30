import React from 'react'
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
    return (
      <div className="Features">
        <h1> User browses and select wanted features here: </h1>
        <Link to='/features-breakdown'>
          <button>Show me the breakdown of the features!</button>
        </Link>
      </div>
    );
  }
}

export default Features;