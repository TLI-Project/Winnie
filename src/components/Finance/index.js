import React from 'react'
import { Link } from 'react-router-dom';

class Finance extends React.Component {
  render() {
    return (
      <div className="Finance">
        <h1> User enters financial information here: </h1>
        <Link to='/features'>
          <button>Show me the features!</button>
        </Link>
      </div>
    );
  }
}

export default Finance;