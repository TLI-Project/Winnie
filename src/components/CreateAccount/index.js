import React from 'react'
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
  render() {
    return (
      <div className="CreateAccount">
        <h1> User creates an account here: </h1>

        <h3>After we save the user info into the db, the user is now logged in and can browse cars:</h3>
        <Link to='/selection'>
          <button>Show me the cars!</button>
        </Link>
      </div>
    );
  }
}

export default CreateAccount;